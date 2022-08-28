const { connectToDatabase } = require('../../../../db/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req,res){
            
     if(req.method==="POST"){
            try {
                // connect to the database
                const newPost= req.body
                let { db } = await connectToDatabase();
                // add the post
               const page= await db.collection('pages').findOne(
                                {
                                _id: new ObjectId(req.body),
                                },
                               
                            );
                            if(!page.posts){
                                return res.json({
                                    message: "there is no post in this page",
                                    success: false,
                                });
                            }
                // return a message and posts
                return res.json({
                    AllPostsForThisPage:page.posts,
                    message: 'get posts  successfully for this page',
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