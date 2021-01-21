const FileController=require("../controllers/file.contrller")


function route(app){
    app.post("/api/file",(req,res)=>{
        FileController.AddNewFile(req,res)
    })
    app.get("/api/getAllFiles/:subNum",(req,res)=>{
        FileController.GetAllFiles(req,res)
    })
}
module.exports={
    route
}