const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  // check if token exists
  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // find the user associated with the token
    req.user = await User.findById(decoded.id);

    // Make sure the user exists
    if (!req.user) {
      return next(new ErrorResponse("No user found with the given token", 401));
    }

    // Check if the user's token is still valid
    if (req.user.tokenVersion !== decoded.tokenVersion) {
      return next(new ErrorResponse("The token has been invalidated", 401));
    }

    // If the user is suspended or deactivated, restrict access
    if (
      req.user.status &&
      (req.user.status === "suspended" || req.user.status === "deactivated")
    ) {
      return next(
        new ErrorResponse("Your account has been suspended or deactivated", 403)
      );
    }

    // Additional checks or logic (e.g., roles or permissions) can be added here

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
