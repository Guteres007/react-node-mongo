export default (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Něco se pokazilo";
  res.status(status).json({
    success: false,
    status,
    message,
  });
};
