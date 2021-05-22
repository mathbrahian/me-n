import jwt from "jsonwebtoken";
import User from "../models/users.models";

const secret = 'secret word'

export const createToken = async (req, res, user) =>{
    const token = jwt.sign({
        id: user._id
    }, secret,{ expiresIn: 3600}
    )
    return res.status(201).json({token})
}

export const verifyUsers = async (req, res, next) => {
    try {
        const token = req.headers["token"]
        if (!token){
            return res.status(403).json({message: "No token"})
        } 
        const decodedToken = jwt.verify(token, secret)
        req.user = await User.findById(decodedToken.id)
        if(!req.user){
            return res.status(404).json({message: 'no user'})
        }
        next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorize'})
    }
}