const RoleController= require("../controllers/Role.controller.js")
const commonService = require("../common/service")


    function route(app)
     {
       console.log('hello');
      /*  , */
      app.post("/api/createNewCall",(req,res)=>{
        // let data=req.body
          // console.log(data);
           console.log('hello');
        var result=RoleController.CreateNewCall(req,res);
        console.log(result)
       }) 
       app.get("/api/createNewCall",(req,res)=>{
        // let data=req.body
          // console.log(data);
           console.log('hello');
        // var result=RoleController.CreateNewCall(req,res);
        var s='dddd';
        console.log(s)
        console.log(result)
       })
     }


module.exports={
    route
}