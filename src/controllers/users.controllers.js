import User from "../models/users.models";
import { createToken } from '../middlewares/users.middlewares';

export const signup = async (req, res) => {
    const { username, email, password } = req.body
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    try {
        const user = await newUser.save()
        createToken(req, res, user)
    } catch (error) {
        return res.status(500).json({
            menssage: 'an error ocurred',
            error
        })
    }
}

export const signin = async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user){
        return res.status(400).json({message: 'User not found'})
    }
    const password= await User.comparePassword(req.body.password, user.password)
    if(!password){
        return res.status(401).json({message: 'Invalid password' })
    }
    createToken(req, res, user)
}