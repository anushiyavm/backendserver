import mongoose from "mongoose";

// Define the schema for the product
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    type: String, // Usually a URL or a file path
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },

sellingPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  uom: {
    type: String, // Examples: pcs, kg, units
    required: true,
  },
  hsnCode: {
    type: String,
    required: true,
  },
  category:{
    type:String,
    required:true
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

export default Product;