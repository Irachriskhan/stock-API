const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  console.log(queryObject);
  // const products = await Product.find(req.query); // alow us to set queries manually
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
