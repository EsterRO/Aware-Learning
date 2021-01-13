const ScheduleController=require("../controllers/schedule.controller")


function route(app){
    app.post("api/schedule",(req,res)=>{
        console.log('esty')
        ScheduleController.enterNewSchedule(req,res)
    })
    app.get("api/schedule",(req,res)=>{
        ScheduleController.GetAllSubjectsFromSchedule(req,res)
    })
}
module.exports={
    route
}