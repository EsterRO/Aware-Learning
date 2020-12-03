const dal = require("../dal/dal.js")

tableName = "Specializations"
function enterSpecialization(request, response) {
    const query = `INSERT INTO ${tableName} VALUES('${request.specializationName}')`
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('data from enterSpecialization: ' + JSON.stringify(data))
        response.send(true)
    }, (err) => console.log('err from enterSpecialization: ' + (data)).catch((err) => console.log('err from catch: ' + err)))
}
module.exports = {
    enterSpecialization
}