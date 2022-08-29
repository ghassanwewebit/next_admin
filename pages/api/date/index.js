import { connectToDatabase } from "../../../db/mongodb";

export default  async function handler(req,res){
    const date= new Date()
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let posts = await db
            .collection('users')
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
}