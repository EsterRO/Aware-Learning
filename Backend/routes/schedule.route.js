const ScheduleController=require("../controllers/schedule.controller")


function route(app){
    app.post("api/schedule",(req,res)=>{
        console.log('esty')
        ScheduleController.enterNewSchedule(req,res)
    })
}
module.exports={
    route
}