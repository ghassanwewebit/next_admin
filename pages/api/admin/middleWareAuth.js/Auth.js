import Jwt  from 'jsonwebtoken';

export const  middleWareAuth =(req,res)=>{

const token=req?.headers?.cookie?.split("=")[1]
    if(req.headers.cookie){
        Jwt.verify(token,process.env.JWT_KEY,async function (err,decoded){
            if(!err && decoded){
                return req,res
            }else{

                res.status(400).json({message:"you are not authentications"})
            }
        })
    }else{
            res.status(400).json({message:"you are not authentications"})

    }


}
