const FileController=require("../controllers/File.contrller")


function route(app){
    app.post("/api/file",(req,res)=>{
        FileController.AddNewFile(req,res)
    })
   /*  app.get("/api/getAllFiles",(req,res)=>{
        FileController.GetAllFiles(req,res)
    }) */
}
module.exports={
    route
}