const User = require("../../../../models/users.model/users.model");

const usersManage = async (req, res, next) => {
  try {
    const { email } = req.params;
    const { role } = req.query;
    console.log(role);

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User not found.",
      });
    }

    findUser.role = role;

    await findUser.save();

    console.log(findUser);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "User retrieved successfully.",
      data: findUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = usersManage;
