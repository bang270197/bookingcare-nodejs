import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getCRUD = async (req, res) => {
    try {
        let data = await CRUDService.getAllUser();
        console.log(data);
        return res.render("displayCRUD.ejs", {
            dataTable: data,
        });
    } catch (error) {}
};

let getAboutPAge = (req, res) => {
    return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send(req.body);
};

module.exports = {
    getCRUD: getCRUD,
    getAboutPAge: getAboutPAge,
    postCRUD: postCRUD,
};
