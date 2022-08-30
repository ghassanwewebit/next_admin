const { connectToDatabase } = require('../../../../db/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req,res){
    console.log("req.cookies",req.headers)
        if(req.method=="POST"){
            try {
                // connect to the database
                const newPost= req.body
                let { db } = await connectToDatabase();
                // add the post
                await db.collection('pages').updateOne(
                                {
                                _id: new ObjectId(req.body.page_id),
                                },
                                { $push: { posts:{
                                    _id:new ObjectId(),
                                    post_name:newPost.post_name,
                                    post_details:newPost.post_details,
                                    section_name:newPost.section_name,
                                    post_Status:newPost.post_Status,
                                    post_date:newPost.date,


                                }} }
                            );
                // return a message
                return res.json({
                    message: 'post added successfully',
                    success: true,
                });
            } catch (error) {
                // return an error
                return res.json({
                    message: new Error(error).message,
                    success: false,
                });
            }
        }else{
            return res.status(400).json({message:"there is an error happen in this end point"})
        }

        // res.status(200).json({ASdasdasdasd:"asdasdasd"})


}