import mongoose from "mongoose";
const userSchema=mongoose.Schema(
    {
        name:{type:String},
        email:{type:String},
        phoneNumber:{type:Number},
        password:{type:String}
    },
    {
        timestamps:true
    }
)
userSchema.pre()
const User=mongoose.model("users",userSchema)
export default User
