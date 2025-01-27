const User = require("../../../../models/users.model/users.model");

const role = async (req, res, next) => {
  try {
    const { email } = req.params;
    console.log(email);

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "User get successfully",
      role: findUser?.role,
      user: findUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = role;
