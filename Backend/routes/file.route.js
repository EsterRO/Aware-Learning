const FileController=require("../controllers/file.contrller")


function route(app){
    app.post("/api/File",(req,res)=>{
        FileController.AddNewFile(req,res)
    })
    app.get("/api/File",(req,res)=>{
        FileController.GetAllFiles(req,res)
    })
}
module.exports={
    route
}