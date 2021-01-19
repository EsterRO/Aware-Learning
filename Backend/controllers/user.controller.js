const dal = require("../dal/dal.js")

tableNameU = "Users"
tableNameT = "Times"
function CreateNewUser(request, response) {
    console.log('api')
    const user = request.body
    console.log(user)
    const query = `INSERT INTO ${tableNameU} VALUES ('${user.Id}','${user.Firstname}','${user.LastName}','${user.address}',${user.Specialization},${user.Role}) `
    console.log(query)
    dal.executeAsync(query, request.body, response).then((data) => {
        response.send()
    }, (err) => console.log('err from CreateNewUser: ' + err)).catch((err) => console.log('err from catch: ' + err))
}
function PlaceUser(request, response) {
    const query = `SELECT u. FROM ${tableName} u JOIN ${tableNameT} t on u.Id=t.UserId WHERE ${request.nRStudent}=t.ClassNum AND ${request.FTime}=t.FromTime AND ${request.TTime}=t.ToTime`
    dal.executeAsync(query, request, response).then((data) => {
        response.send(data)
    }, (err) => console.log('err from PlaceUser: ' + err)).catch((err) => console.log('err from catch: ' + err))
}
module.exports = {
    CreateNewUser,
    PlaceUser
}