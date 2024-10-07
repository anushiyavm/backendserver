import Product from "../models/product.js";


// Controller to handle product creation
export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      productImage,
      originalPrice,
      discountPrice,
      sellingPrice,
      quantity,
      uom,
      hsnCode,
      category
    } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      productName,
      productDescription,
      productImage,
      originalPrice,
      discountPrice,
      sellingPrice,
      quantity,
      uom,
      hsnCode,
      category
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Return the saved product
    res.status(201).json({
      message: "Product created successfully",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};


// Controller to handle fetching all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
};

