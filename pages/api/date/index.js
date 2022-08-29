

export default  async function handler(req,res){
    const date= new Date()

    res.status(200).json({title:"this page are working ",date:date})
}