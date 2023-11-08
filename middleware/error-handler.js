// const { CustopmAPIError } = require("../errors/custom-errors");
const errorHandlerMiddleware = (err, req, res, next) => {
  // if (err instanceof CustopmAPIError) {
  //   return res.status(500).json({ msg: err.message });
  // }
  console.log(err);
  return res
    .status(500)
    .json({ msg: `Something went wrong, Please try again later` });
};

module.exports = errorHandlerMiddleware;
