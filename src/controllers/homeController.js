import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render("homepage.ejs", {
            data: JSON.stringify(data),
        });
    } catch (err) {
        console.log(err);
    }
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
    getHomePage: getHomePage,
    getAboutPAge: getAboutPAge,
    postCRUD: postCRUD,
};
