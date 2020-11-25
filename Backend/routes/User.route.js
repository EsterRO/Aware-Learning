const UserController=require("../controllers/user.controller")

function route(app){
    app.post("/api/user",(req,res)=>{
        UserController.CreateNewUser(req,res)
    })
    
}
module.exports={
    route
}