const jwt = require("jsonwebtoken");
const User = require("../../../../models/users.model/users.model");

const login = async (req, res) => {
  const { name, email, photoURL } = req.body;

  if (!email) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Please provide an email address.",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    const newUser = new User({ name, email, photoURL });

    const newToken = jwt.sign(
      {
        id: newUser?._id,
        email: newUser?.email,
        name: newUser?.name,
        role: newUser?.role,
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

    await newUser.save();
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Login successful.",
      token: newToken,
    });
  }

  if (!user) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: "No user found with this email.",
    });
  }

  const token = jwt.sign(
    { id: user?._id, email: user?.email, name: user?.name, role: user?.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "15d",
    }
  );

  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: process.env.IS_DEVELOPMENT,
    secure: true,
    sameSite: "lax",
  });

  console.log(user);
  return res.status(200).json({
    status: 200,
    success: true,
    message: "Login successful.",
    user: {
      id: user?._id,
      email: user?.email,
      name: user?.name,
      photoURL: user?.photoURL,
      role: user?.role,
    },
    token,
  });
};
module.exports = login;
