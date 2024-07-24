/*
export const signup = (req, res) => {

    console.log(req.body)
esto es para hacer la prueba de si funcionan mis routes
}*/

import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json("User created")
    } catch (error) {
        res.status(500).json(error.message)
    }
       
}