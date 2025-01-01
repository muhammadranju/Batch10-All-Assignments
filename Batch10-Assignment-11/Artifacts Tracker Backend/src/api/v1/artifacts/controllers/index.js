const create = require("./create");
const findAll = require("./findAll");
const findOne = require("./findOne");
const update = require("./update");
const deleteItem = require("./delete");
const {
  myArtifacts,
  linkedUnlinkedArtifacts,
  findAllLikedArtifacts,
} = require("./artifacts");

module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteItem,
  myArtifacts,
  linkedUnlinkedArtifacts,
  findAllLikedArtifacts,
};
