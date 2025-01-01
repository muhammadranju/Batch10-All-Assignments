const Artifact = require("../../../../models/artifact.model/artifact.model");

const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artifact = await Artifact.findOne({
      slug: req.params.id,
    }).populate("addedBy");

    if (!artifact) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "No artifact found with this id.",
      });
    }
    // console.log(artifact);
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Artifact found successfully.",
      data: artifact,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = findOne;
