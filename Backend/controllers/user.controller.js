const dal = require("../dal/dal.js")

tableName = "Users"
tableNameT="Times"
function CreateNewUser(request, response){
    const user=request.body
    const query=`INSERT INTO ${tableName} VALUES ('${request.Id}','${request.FirstName}','${request.LastName}','${request.Adress}',${request.Specialization},${request.Rol_}) `
    await dal.executeAsync(query,request.body,response).then((data)=>{
        response.send()
    },(err)=>console.log('err from CreateNewUser: '+err)).catch((err)=>console.log('err from catch: '+err))
}
function PlaceUser(request,response){
    const query=`SELECT u. FROM ${tableName} u JOIN ${tableNameT} t on u.Id=t.UserId WHERE ${request.nRStudent}=t.ClassNum AND ${request.FTime}=t.FromTime AND ${request.TTime}=t.ToTime`
    await dal.executeAsync(query,request,response).then((data)=>{
        response.send(data)
    },(err)=>console.log('err from PlaceUser: '+err)).catch((err)=>console.log('err from catch: '+err))
}
module.exports={
    CreateNewUser,
    PlaceUser
}