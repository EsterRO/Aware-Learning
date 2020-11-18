const dal = require("../dal/dal.js")

tableName = "Users"
function CreateNewUser(request, response){
    const user=request.body
    const query=`INSERT INTO ${tableName} VALUES ('${request.Id}','${request.FirstName}','${request.LastName}','${request.Adress}','${request.Specialization}','${request.Rol_}') `
    await dal.executeAsync(query,request.body,response).then((data)=>{
        response.send()
    },(err)=>console.log('err from CreateNewUser: '+err)).catch((err)=>console.log('err from catch: '+err))
}
module.exports={
    CreateNewUser
}