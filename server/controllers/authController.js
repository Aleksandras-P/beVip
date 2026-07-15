import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { createToken, maxAge } from "../utils/jwt.js";



const createUser_post = async (req, res) => {

    try {
        const {name, email, password} = req.body;

        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ message: "Email already in use" });

        const hashed = await bcrypt.hash(password, 10);
        
        const user = await User.create({ name, email, password: hashed });
        const token = createToken(user._id)

        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, 
        });

    res.json({ 
    id: user._id,
    name: user.name,
    email: user.email,
    balance: user.balance });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

const login_post = async (req, res) => {

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = createToken(user._id)

    res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, 
    });


    res.json({ id: user._id, name: user.name, email: user.email, balance: user.balance });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

const user_get = async (req, res) => {
  res.json(req.user);
};


const logout_post = (req, res) => {
  res.clearCookie("jwt");
  res.json({ message: "Logged out" });
}


export default {
    createUser_post,
    login_post,
    user_get,
    logout_post
}