const { connectToDatabase } = require('../../../db/mongodb');
const ObjectId = require('mongodb').ObjectId;
import {middleWareAuth} from './middleWareAuth.js/Auth.js'
 

export default (async function handler(req,res){
    console.log("req.cookiesssss",req.headers)
        if(req.method=="POST"){
            middleWareAuth(req,res)

            try {
                // connect to the database
                let { db } = await connectToDatabase();
                // add the post
                await db.collection('pages').insertOne(req.body);
                // return a message
                return res.json({
                    message: 'Page added successfully',
                    success: true,
                });
            } catch (error) {
                // return an error
                return res.json({
                    message: new Error(error).message,
                    success: false,
                });
            }
        }else if(req.method==="GET"){
                try {
                // connect to the database
                let { db } = await connectToDatabase();
                // fetch the posts
                let posts = await db
                    .collection('pages')
                    .find({})
                    .sort({ published: -1 })
                    .toArray();
                // return the posts
                return res.json({
                    body:posts,
                    message: " fetch the pages from database successfully",
                    success: true,
                });
            } catch (error) {
                // return the error
                return res.json({
                    message: new Error(error).message,
                    success: false,
                });
            }
        }else if(req.method==="DELETE"){
            middleWareAuth(req,res)

        try {
            // Connecting to the database
            let { db } = await connectToDatabase();
    
            // Deleting the post
            await db.collection('pages').deleteOne({
                _id: new ObjectId(req.query.id),
            });
    
            // returning a message
            return res.json({
                message: 'page deleted successfully',
                success: true,
            });
        } catch (error) {
    
            // returning an error
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
    }else{
            return res.status(400).json({message:"there is an error happen in this end point"})
        }
})