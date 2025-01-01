const Artifact = require("../../../../models/artifact.model/artifact.model");

const findAll = async (req, res, next) => {
  try {
    const { search, likeCount } = req.query;

    const query = likeCount
      ? Artifact.find().sort({ likes: -1 }).limit(6)
      : search
      ? Artifact.find({ artifactName: new RegExp(search, "i") })
      : Artifact.find({}).sort({ _id: -1 });

    const artifacts = await query;

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Artifacts retrieved successfully.",
      data: artifacts,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = findAll;
