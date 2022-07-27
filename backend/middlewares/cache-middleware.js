export function cacheMiddleware(req, res, next) {
  //Cache pro nedynamické výsoedky
  res.set("Cache-Control", "public, max-age=3600");
  next();
}
