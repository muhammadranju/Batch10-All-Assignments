const Report = require("../../../../models/report.model/report.model");

const findAllReports = async (req, res, next) => {
  try {
    const findReports = await Report.find()
      .sort({
        _id: -1,
      })
      .populate("productId");
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Reports retrieved successfully",
      data: findReports,
    });
  } catch (error) {
    next(error);
  }
};

const report = async (req, res, next) => {
  try {
    const { productId, reporterEmail, reason } = req.body;

    const findReport = await Report.findOne({
      $and: [{ productId: req.params.id }, { reporterEmail: reporterEmail }],
    });

    if (findReport) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "You have already reported this product.",
      });
    }

    const report = new Report({
      productId,
      reporterEmail,
      reason,
    });

    await report.save();
    console.log(report);

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Product reported successfully.",
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

const handelReportDelete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const findReport = await Report.findById(id);

    if (!findReport) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Report not found.",
      });
    }

    await findReport.deleteOne();

    console.log(findReport);

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Report deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { report, findAllReports, handelReportDelete };
