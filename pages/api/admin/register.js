const { connectToDatabase } = require('../../../db/mongodb');
const ObjectId = require('mongodb').ObjectId;
import Jwt  from 'jsonwebtoken';
var bcrypt = require('bcryptjs');

const key="ghassanghanimah"

export default async function handler(req, res) {
    // user login methods
    if(req.method==="POST"){

        const {name,email,password,agree}=req.body
        if(!email|| !password ||!name){
            res.status(400).json({error:"there is no password"})
        }else{
            
    try {
  
        bcrypt.genSalt(10, async function(err, salt) {
            bcrypt.hash("password", salt, async function(err, hash) {
                // Store hash in your password DB.


                        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        const newUsers={
            name,
            email,
            password:hash,
            agree,
        }
        let posts = await db
        .collection('adminUsers')
        .findOne({
            email:email,
        })
        if(posts){
            return res.json({
                message:"this account is already exist",
                success: false,
            });
        }
      await db.collection('adminUsers').insertOne(newUsers);

      Jwt.sign(
        newUsers,
        key,
        {
            expiresIn:31556926
        },
        (err,token)=>{
            res.json({
                message: 'Post added successfully',
                success: true,
                token: "Bearer" +" "+ token
            });
        }
      )

            });
        });

       
    } catch (error) {
        // return the error
        return res.json({
            message:" email  not found please check again",
            success: false,
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

