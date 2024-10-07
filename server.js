import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { database } from "./dbconnection/db.js";
import authrouter from "./routers/user.router.js";
import datarouter from "./routers/datarouter.js";
dotenv.config()
let app = express();
app.use(cors());
app.use(express.json());

app.use("/", authrouter)
app.use("/product",datarouter)
app.listen(process.env.port, ()=>{
    console.log("server created");
})

app.get("/", (req, res)=>{
    res.send("Hello !")
})






