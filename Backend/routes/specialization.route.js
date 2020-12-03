const specializationController=require('../controllers/specialization.comtroller')
 
function route(app){
    app.post("api/specialization",(req,res)=>{
        specializationController.enterSpecialization(req,res)
    })
}
module.exports={
    route
}
