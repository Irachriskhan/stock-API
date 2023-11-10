const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const notFoundMiddleware = require("./middleware/error-handler");
const errorHandlerMiddleware = require("./middleware/not-found");
require("dotenv").config();
const connectDB = require("./db/connection");
const productsRouter = require("./routes/products");
require("express-async-errors");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">Products</a>`);
});

app.use("/api/v1/products", productsRouter);

// products route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log("StockAPI listening on port ", port));
  } catch (error) {
    console.log(error);
  }
};

start();
