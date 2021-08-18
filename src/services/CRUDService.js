import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hasUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === "1" ? true : false,
                roleId: data.roleId,
                phoneNumber: data.phoneNumber,
            });
            resolve("ok create a new user successfully");
        } catch (error) {
            reject(error);
        }
    });
};

let hasUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            console.log(password);
            const hashPassword = bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUser: createNewUser,
};
