// Add data to the database from populate.json file
require("dotenv").config();
const connectDB = require("./db/connection");
const Product = require("./models/product");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany(); //Remove all products in the DB
    await Product.create(jsonProducts);
    console.log("Populated data executed Successfully");
    process.exit(0); // exit with success
  } catch (error) {
    console.log(error);
    process.exit(1); // exit with error
  }
};

start();
