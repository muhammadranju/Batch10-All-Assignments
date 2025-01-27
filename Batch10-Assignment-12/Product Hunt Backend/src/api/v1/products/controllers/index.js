const create = require("./create");
const findAll = require("./findAll");
const findOne = require("./findOne");
const update = require("./update");
const deleteItem = require("./delete");
const upvote = require("./upvote");
const statistics = require("./statistics");
const featuredProducts = require("./featuredProducts");
const { report, findAllReports, handelReportDelete } = require("./report");

module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteItem,
  upvote,
  statistics,
  report,
  findAllReports,
  handelReportDelete,
  featuredProducts,
};
