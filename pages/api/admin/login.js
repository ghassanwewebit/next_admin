const { connectToDatabase } = require('../../../db/mongodb');
const ObjectId = require('mongodb').ObjectId;
import Jwt  from 'jsonwebtoken';
const key=process.env.JWT_KEY

export default async function handler(req, res) {
    // user login methods
    console.log("ASDasdasdasdasd");
    if(req.method==="POST"){
              
        const {email,password}=req.body
        console.log(password);
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
            if(posts.password===password){
                console.log("ASdasdmaosdbiaysdbnasjd");
                Jwt.sign(
                    payload,
                    key,
                    {
                        expiresIn: 31556926, // 1 year in seconds
                    },
                    (err,token)=>{
                        res.status(200).json({
                            success:true,
                            token:'Bearer' + ' ' +  token
                        })
                    }
            )
            }else{
                res.status(400).json({error:" wrong password please check you password again"})
            }
        // return the posts
    } catch (error) {
        // return the error
        return res.status(500).json({
            message:" email  not found please check again",
            success: false,
            status:500
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

