import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/about", homeController.getAboutPAge);

    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.getCRUD);
    app.use("/", router);
};

module.exports = initWebRoutes;
