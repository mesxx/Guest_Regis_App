const errorHandler = (err, req, res, next) => {
  let code = 500;
  let error = "[NETWORK ERROR] Initial Server Error";

  if (err.message === "Page Not Found") {
    code = 404;
    error = `[NOT FOUND] ${err.message}!`;
  } else if (err.message.includes("validation failed")) {
    code = 400;
    error = `[REQUEST ERROR] ${err.message}. Check inputted data, route or params!`;
  } else if (
    err.message === "No Access" ||
    err.message.includes("jwt malformed")
  ) {
    code = 401;
    error = `[UNAUTHORIZED] ${err.message}!`;
  }

  res.status(code).json({ responseCode: code, responseMessage: error });
};

module.exports = errorHandler;
