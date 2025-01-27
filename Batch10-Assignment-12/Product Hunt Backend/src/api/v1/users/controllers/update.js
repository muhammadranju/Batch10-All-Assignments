const User = require("../../../../models/users.model/users.model");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role, subscription, productAddLimit } = req.body;

    // if (!role) {
    //   return res.status(400).json({
    //     status: 400,
    //     success: false,
    //     message: "Please provide all required fields.",
    //   });
    // }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User not found.",
      });
    }

    user.role = role ?? user.role;
    user.subscription = subscription ?? user.subscription;
    user.productAddLimit = productAddLimit ?? user.productAddLimit;

    await user.save();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "User updated successfully.",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = update;
