const FileController=require("../controllers/File.contrller")


function route(app){
    app.post("/api/File",(req,res)=>{
        FileController.AddNewFile(req,res)
    })
}
module.exports={
    route
}