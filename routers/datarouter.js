import express from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";
let datarouter = express.Router()
datarouter.post("/data",createProduct)
datarouter.get("/all",getAllProducts)
export default datarouter
