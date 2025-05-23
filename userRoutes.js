import express from "express"
import { register } from "../controler/userController";
const userRoute = express.Router();
//GET


//POST
userRoute.post("/register",(req,res)=>{
    const {name}=req.body;
    res.status(200).json({data:`Welcome ${name}`})
}
)

//PUT
 
 
 
 //DELETE







 export default  userRoute