import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
require("dotenv").config();
let app = express();
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config viewEngine
viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log("Backend nodejs is runging on the port " + port);
});
