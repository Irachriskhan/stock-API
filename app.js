const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const notFoundMiddleware = require("./middleware/error-handler");
const errorHandlerMiddleware = require("./middleware/not-found");
require("dotenv").config();

// middleware
app.use(express.json());

// products route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Prducts</a>');
});

const start = async () => {
  try {
    // connectDB
    app.listen(port, () => console.log("StockAPI listening on port ", port));
  } catch (error) {
    console.log(error);
  }
};

start();
