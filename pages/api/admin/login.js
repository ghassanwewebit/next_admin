const { connectToDatabase } = require('../../../db/mongodb');
const ObjectId = require('mongodb').ObjectId;
import Jwt  from 'jsonwebtoken';
var Cookie = require('cookie');
var bcrypt = require('bcryptjs');
const key="ghassanghanimah"

export default async function handler(req, res) {
    // user login methods
    if(req.method==="POST"){
              
        const {email,password}=req.body
        if(!email|| !password){
            res.status(400).json({error:"there is no password"})

        }else{
            
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let posts = await db
            .collection('adminUsers')
            .findOne({
                email:email,
            })
            const payload = {
                id:posts.id,
                email:posts.email
            }
            if(!posts){
                return res.status(400).json("there is no email")
            }
                const checkPassword=bcrypt.compare(password, posts.password).then((res) => {
                    return res              
                  });
                        if(checkPassword){

                      const jwt = Jwt.sign(payload,key,{expiresIn: 31556926})
                
                    res.setHeader('Set-Cookie',Cookie.serialize("Authentications",jwt,{
                        httpOlny:true,
                        secure:process.env.NODE_ENV!=='development',
                        sameSite:'strict',
                        maxAge:3000,
                        path:"/",

                    }))
                    res.json({message:"Welcome back again",status:true})
                    }else{
                        res.status(400).json({error:" wrong password please check you password again"})
                    }
                
        // return the posts
    } catch (error) {
        // return the error
        return res.status(501).json({
            messaged:"asdasdasdasdasd",
            message:error,
            success: false,
            status:501
        });
    }
        }
    }
    
}


// async function getPosts(req,res){
//     try {
//         // connect to the database
//         let { db } = await connectToDatabase();
//         // fetch the posts
//         let posts = await db
//             .collection('nextjs')
//             .find({})
//             .sort({ published: -1 })
//             .toArray();
//         // return the posts
//         return res.json({
//             message: JSON.parse(JSON.stringify(posts)),
//             success: true,
//         });
//     } catch (error) {
//         // return the error
//         return res.json({
//             message: new Error(error).message,
//             success: false,
//         });
//     }
// }

// async function deletePost(req, res) {
//     try {
//         // Connecting to the database
//         let { db } = await connectToDatabase();

//         // Deleting the post
//         await db.collection('nextjs').deleteOne({
//             _id: new ObjectId(req.body),
//         });

//         // returning a message
//         return res.json({
//             message: 'Post deleted successfully',
//             success: true,
//         });
//     } catch (error) {

//         // returning an error
//         return res.json({
//             message: new Error(error).message,
//             success: false,
//         });
//     }
// }


// async function updatePost(req, res) {
//     try {
//         // connect to the database
//         let { db } = await connectToDatabase();

//         // update the published status of the post
//         await db.collection('posts').updateOne(
//             {
//                 _id: new ObjectId(req.body),
//             },
//             { $set: { published: true } }
//         );

//         // return a message
//         return res.json({
//             message: 'Post updated successfully',
//             success: true,
//         });
//     } catch (error) {

//         // return an error
//         return res.json({
//             message: new Error(error).message,
//             success: false,
//         });
//     }
// }

// async function addPost(req, res) {
//     try {
//         // connect to the database
//         let { db } = await connectToDatabase();
//         // add the post
//         await db.collection('posts').insertOne(JSON.parse(req.body));
//         // return a message
//         return res.json({
//             message: 'Post added successfully',
//             success: true,
//         });
//     } catch (error) {
//         // return an error
//         return res.json({
//             message: new Error(error).message,
//             success: false,
//         });
//     }
// }

