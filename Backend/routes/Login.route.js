const loginContriller = require("../controllers/login.contriller")


function route(app){
    app.get("/api/login",(req,res)=>{
        loginContriller.Login(req,res)
    })
    app.get("/api/login",(req,res)=>{
        loginContriller.SelectRoleById(req,res)
    })
    app.post("/api/login",(req,res)=>{
        loginContriller.UpdateEnterTimeUser(req,res)
    })
}
module.exports={
    route
}