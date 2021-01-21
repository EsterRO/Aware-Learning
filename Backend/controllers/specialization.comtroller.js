const dal = require("../dal/dal.js")

tableNameSp = "Specializations"
function enterSpecialization(request, response) {
    console.log(request.body)
    const query = `INSERT INTO ${tableNameSp} VALUES(${request.body.SpecializationsNum},'${request.body.SpecializationsName}')`
    console.log(query)
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('data from enterSpecialization: ' + data)
        response.send(true)
    }, (err) => console.log('err from enterSpecialization: ' + err)).catch((err) => console.log('err from catch: ' + err))
}
module.exports = {
    enterSpecialization
}