const loginContriller = require("../controllers/login.contriller")


function route(app){
    app.get("/api/login",(req,res)=>{
        console.log('esty')
        loginContriller.Login(req,res)
    })
    app.get("/api/selectRoleById",(req,res)=>{
        loginContriller.SelectRoleById(req,res)
    })
    app.post("/api/updateEnterTimeUser",(req,res)=>{
        loginContriller.UpdateEnterTimeUser(req,res)
    })
}

module.exports={
    route
}