const User = require("../../../../models/users.model/users.model");

const findAll = async (req, res, next) => {
  try {
    const users = await User.find({});

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Users retrieved successfully.",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;
