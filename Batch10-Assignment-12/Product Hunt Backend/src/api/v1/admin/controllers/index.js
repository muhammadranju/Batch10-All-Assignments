const usersManage = require("./usersManage");
const createCoupons = require("./createCoupons");
const getAllCoupons = require("./getAllCoupons");
const deleteCoupons = require("./deleteCoupons");
const updateCoupons = require("./updateCoupons");
const findOneCoupon = require("./fineOne");
const validateCoupon = require("./validateCoupon");

module.exports = {
  createCoupons,
  usersManage,
  getAllCoupons,
  deleteCoupons,
  updateCoupons,
  findOneCoupon,
  validateCoupon,
};
