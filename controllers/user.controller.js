import User from '../models/user.js';
import bcrypt from "bcrypt";

const Signup= async (req,res)=>{
    try{
        // console.log(req.body);
        const {name,email,contactNumber:contact,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({name,email,contact,password:hashedPassword});
        await user.save();
        res.status(201).json({
            message: 'User registered successfully!',
            status: 'success',
        });
    }
    catch(error){
        console.error(error);
    }
}

const getPatients=async (req,res)=>{
    try{
    const patients=await User.find({});
    res.status(200).json({patients});
    }
    catch(error){
        console.error(error);
    }
}

export {Signup,getPatients};
