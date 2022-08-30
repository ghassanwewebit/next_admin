import Jwt  from 'jsonwebtoken';

const  middleWareAuth = async (fn)=>(req,res)=>{


    Jwt.verify(req.headers.cookie.Authentications,process.env.JWT_KEY,async function (err,decoded){
        if(!err && decoded){
            return fn(req,res)
        }else{

            res.status(400).json({message:"you are not authentications"})
        }
    })



}

export default middleWareAuth