const Artifact = require("../../../../models/artifact.model/artifact.model");
const User = require("../../../../models/users.model/users.model");
const slugify = require("slugify");

const create = async (req, res, next) => {
  try {
    const {
      artifactName,
      imageUrl,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
    } = req.body;

    console.log(req.user);

    if (!req.user || !req.user.email) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "User not authenticated.",
      });
    }

    const existingArtifact = await Artifact.findOne({
      slug: slugify(artifactName),
    });

    if (existingArtifact) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "This artifact already exists.",
      });
    }

    const findUser = await User.findOne({ email: req.user.email });

    if (!findUser) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User not found.",
      });
    }

    const newArtifact = new Artifact({
      artifactName,
      imageUrl,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
      addedBy: req.user.id,
      slug: slugify(artifactName),
    });

    // Add artifact to user's createdArtifacts array
    findUser.createdArtifacts.push(newArtifact._id);

    await findUser.save(); // Save user updates
    await newArtifact.save(); // Save new artifact

    console.log(newArtifact);

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Artifact created successfully.",
      data: newArtifact,
    });
  } catch (error) {
    console.error("Error creating artifact:", error);
    next(error);
  }
};

module.exports = create;
