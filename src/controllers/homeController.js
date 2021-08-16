import db from "../models/index";

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
    return res.render("test/about.ejs");
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPAge: getAboutPAge,
};
