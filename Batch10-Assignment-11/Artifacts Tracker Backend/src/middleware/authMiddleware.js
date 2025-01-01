const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({
      status: 401,
      success: false,
      message: "Please provide a valid token.",
    });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  console.log("I'm in the middleware😵‍💫");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      success: false,
      message: "Invalid token.",
      error: error.message,
    });
  }

  // next();
};

module.exports = authMiddleware;
