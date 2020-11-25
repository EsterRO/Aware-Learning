const dal = require("../dal/dal.js")

tableName = "Users"
tableNameT="Times"
function Login(request, response) {
    const query = `SELECT ISNULL((SELECT Id FROM ${tableName} WHERE Id='${request.query.Id}'),0)`
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('data from Login:' + JSON.stringify(data))
        if (JSON.stringify(data) == '[{"":"0"}]')
            response.send(false)
        else
            response.send(true)
    }, (err) => console.log('err from Login: ' + (data)).catch((err) => console.log('err from catch: ' + err)))
}
function SelectRoleById(request, response) {
    const query = `SELECT Rol_ from ${tableName} WHERE Id='${request.query.Id}'`
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('data from Login.SelectRoleById: ' + JSON.stringify(data))
        response.send(data)
    }, (err) => console.log('err from Login.SelectRoleById: ' + (data)).catch((err) => console.log('err from catch: ' + err)))
}
function UpdateEnterTimeUser(request,response){
    const query=`INSERT INTO ${tableNameT} VALUES ('${request.userId}',${request.FromTime})`
    dal.executeAsync(query,request.body,response).then((data)=>{
      console.log ('was updated enter time: '+JSON.stringify(data))
       response.send('was updated enter time')
    },(err)=>console.log('err from Login.UpdateEnterTimeUser: '+(data)).catch((err)=>console.log('err from cath: '+err)))
}
module.exports = {
    Login,
    SelectRoleById,
    UpdateEnterTimeUser
}
