const ScheduleController=require("../controllers/schedule.controller")


function route(app){
    app.post("api/schedule",(req,res)=>{
        ScheduleController.enterNewSchedule(req,res)
    })
}
module.exports={
    route
}