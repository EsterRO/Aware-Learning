const loginContriller = require("../controllers/login.contriller")
const LpginController=require("../controllers/login.contriller")

function route(app){
    app.get("/api/Login",(req,res)=>{
        loginContriller.Login(req,res)
    })
    app.get("/api/Login",(req,res)=>{
        loginContriller.SelectRoleById(req,res)
    })
    app.post("/api/Login",(req,res)=>{
        loginContriller.UpdateEnterTimeUser(req,res)
    })
}
module.exports={
    route
}