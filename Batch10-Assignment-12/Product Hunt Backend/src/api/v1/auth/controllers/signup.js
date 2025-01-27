const User = require("../../../../models/users.model/users.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, photoURL, role } = req.body;

  console.log(req.body);
  if (!name || !email || !photoURL) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please provide all required fields.",
    });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const newToken = jwt.sign(
      {
        id: existingUser?._id,
        email: existingUser?.email,
        name: existingUser?.name,
        role: existingUser?.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15d",
      }
    );
    res.cookie("token", newToken, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      httpOnly: process.env.IS_DEVELOPMENT,
      secure: true,
      sameSite: "lax",
    });

    return res.status(201).json({
      status: 201,
      success: true,
      message: "User Login successfully.",
      data: existingUser,
      token: newToken,
    });
  }

  try {
    const user = new User({ name, email, photoURL, role });

    const token = jwt.sign(
      { id: user?._id, email: user?.email, name: user?.name, role: user?.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "15d",
      }
    );
    await user.save();

    res.cookie("token", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      httpOnly: process.env.IS_DEVELOPMENT,
      secure: true,
      sameSite: "lax",
    });

    return res.status(201).json({
      status: 201,
      success: true,
      message: "User registered successfully.",
      data: user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "An error occurred while registering the user.",
      error: error.message,
    });
  }
};
module.exports = register;
