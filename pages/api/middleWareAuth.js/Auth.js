import Jwt  from 'jsonwebtoken';

export default    middleWareAuth= async(fn)=>(req,res)=>{
    console.log(req.cookie)


    Jwt.verify(req.cookie.Authentications,process.env.JWT_KEY,async function (err,decoded){
        if(!err && decoded){
            return fn(req,res)
        }else{

            res.status(400).json({message:"you are not authentications"})
        }
    })



}