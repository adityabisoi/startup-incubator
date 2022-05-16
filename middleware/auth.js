const jwt=require("jsonwebtoken")
const User=require('../model/User')

const verifyToken=async (req,res,next)=>{
    try{
        const token=req.header('auth-token')
        const decoded=jwt.verify(token,'hello')
        const user=await User.findOne({_id:decoded._id})
        if(!user){
            throw new error()
        }
        req.user=user
        next()
    }catch(e){
              res.status(401).send('false')
    }
}

module.exports=verifyToken