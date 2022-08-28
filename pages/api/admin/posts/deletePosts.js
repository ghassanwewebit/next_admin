const { connectToDatabase } = require('../../../../db/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req,res){
            
        if(req.method=="DELETE"){
            console.log(req.body)
    
            try {
                // connect to the database
              
                let { db } = await connectToDatabase();
                // add the post
                await db.collection('pages').update(
                                {
                                _id: new ObjectId(req.body.page_id),
                                },
                                { $pull: { posts: { _id: new ObjectId(req.body.post_id) } } },

                            );
                // return a message
                return res.json({
                    message: 'post Delete successfully',
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