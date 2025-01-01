require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { client, dbConnection } = require("./db/connectionDB");
const { ObjectId } = require("mongodb");
dbConnection();

const app = express();
const PORT = process.env.PORT || 5000;
app.use([cors(), express.json(), morgan("dev")]);

const database = client.db("VISA-Portal");
const Visa = database.collection("visas");
const Applications = database.collection("visa-applications");

// Visa Routes
app.route("/visas").get(async (req, res) => {
  try {
    if (req.query.userEmail) {
      const visas = await Visa.find({ email: req.query.userEmail }).toArray();
      return res
        .status(200)
        .json({ message: "Visas retrieved successfully", status: 200, visas });
    }
    if (req.query.visaType) {
      if (req.query.visaType !== "All Types") {
        const visas = await Visa.find({
          visaType: req.query.visaType,
        }).toArray();
        return res.status(200).json({
          message: "Visas retrieved successfully",
          status: 200,
          visas,
        });
      }
    }

    const visas = await Visa.find({}).sort({ _id: -1 }).toArray();
    return res
      .status(200)
      .json({ message: "Visas retrieved successfully", status: 200, visas });
  } catch (error) {
    console.log(error);
  }
});

// Visa Routes to get by id
app.route("/visas/:id").get(async (req, res) => {
  try {
    console.log(req.params.id);
    const visa = await Visa.findOne({ _id: new ObjectId(req.params.id) });
    // console.log(visa);
    return res
      .status(200)
      .json({ message: "Visa retrieved successfully", status: 200, visa });
  } catch (error) {
    console.log(error);
  }
});

// Visa Routes to post
app.route("/visas").post(async (req, res) => {
  try {
    const visa = req.body;

    const newVisa = await Visa.insertOne(visa);

    return res
      .status(201)
      .json({ message: "Visa created successfully", status: 201, newVisa });
  } catch (error) {
    console.log(error);
  }
});

// Visa Routes to put
app.route("/visas/:id").put(async (req, res) => {
  try {
    const visa = req.body;
    const { id } = req.params;

    if (visa._id) {
      delete visa._id;
    }
    // const updatedVisa = await Visa.updateOne(
    //   { _id: id },
    //   { $set: visa },
    //   { upsert: true }
    // );

    const updatedVisa = await Visa.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: visa }, // Use $set to update fields
      {
        upsert: true, // Creates a new document if it doesn't exist
        returnDocument: "after", // Optional: To return the updated document
      }
    );
    console.log(updatedVisa);

    return res
      .status(202)
      .json({ message: "Visa updated successfully", status: 202, updatedVisa });
  } catch (error) {
    console.log(error);
  }
});

// Visa Routes to delete
app.route("/visas/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVisa = await Visa.deleteOne({ _id: new ObjectId(id) });

    return res
      .status(204)
      .json({ message: "Visa deleted successfully", status: 204, deletedVisa });
  } catch (error) {
    console.log(error);
  }
});

// Visa Application Routes
app.route("/applications").get(async (req, res) => {
  if (req.query.userEmail) {
    const application = await Applications.find({
      email: req.query.userEmail,
    })
      .sort({ _id: -1 })
      .toArray();
    return res.status(200).json({
      message: "Applications retrieved successfully",
      status: 200,
      application,
    });
  }

  const application = await Applications.find({}).sort({ _id: -1 }).toArray();
  return res.status(200).json({
    message: "Applications retrieved successfully",
    status: 200,
    application,
  });
});

app.route("/applications/s/:searchId").get(async (req, res) => {
  const { searchId } = req.params;
  const { userEmail } = req.query;
  console.log(searchId);

  const application = await Applications.find({
    country_name: searchId,
    email: userEmail,
  })
    .sort({ _id: -1 })
    .toArray();

  console.log(application);
  return res.status(200).json({
    message: "Applications retrieved successfully",
    status: 200,
    application,
  });
});

// Visa Application routs post
app.route("/applications").post(async (req, res) => {
  const application = req.body;

  const newApplication = await Applications.insertOne(application);

  console.log(newApplication);
  return res.status(201).json({
    message: "Application created successfully",
    status: 201,
    newApplication,
  });
});

// Visa Application Routes to post
app.route("/applications/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedApplication = await Applications.deleteOne({
      _id: new ObjectId(id),
    });

    return res.status(204).json({
      message: "Application deleted successfully",
      status: 204,
      deletedApplication,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
