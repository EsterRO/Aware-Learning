const { DateTime } = require("mssql")
const dal = require("../dal/dal.js")
tableName = "Users"
tableNameT="Times"
roletable="Roles"
function Login(request, response) {
// var config = {
    // WHERE Id='${request.query.Id}
    
    const query = `SELECT * FROM ${tableName} f WHERE f.Id=${request.query.Id} `
    dal.executeAsync(query, request.body, response).then((data) => {
    // console.log(data.recordset[0])
        // console.log(data.recordset[0].Id )
        if (data.recordset[0]){
            // var idRole= `SELECT RoleNum FROM ${roletable} r WHERE r.RoleNum='${data.recordset[0].Rol_}'`
            // dal.executeAsync(idRole, request.body, response).then((role)=>{
            //     console.log(role)
            // })
             time=Date.now();
            dal.executeAsync(t,request.body,response).then((x)=>{
                console.log (x)
              },(err)=>console.log('err from Login.UpdateEnterTimeUser: '+(x)).catch((err)=>console.log('err from cath: '+err)))

            response.send(String( data.recordset[0].Rol_))


            
        }
        else
            response.send(false)

        
    }, (err) => console.log('err from Login: ' + (data)).catch((err) => console.log('err from catch: ' + err)))
}

// function doCall(urlToCall, callback) {
//     urllib.request(urlToCall, { wd: 'nodejs' }, function (err, data, response) {                              
//         var statusCode = response.statusCode;
//         finalData = getResponseJson(statusCode, data.toString());
//         return callback(finalData);
//     });
// }

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
