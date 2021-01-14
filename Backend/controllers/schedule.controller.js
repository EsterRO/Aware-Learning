const dal = require("../dal/dal")


tableName = "Schedule"

function enterNewSchedule(request, response) {
    const query = `INSERT INTO ${tableName} VALUES(${request.ScheduleDate},${request.SpecializationNum},${request.SubjectNum})`

    dal.executeAsync(query, request.body, response).then((data) => {
        console.log("data from update-schedule: " + JSON.stringify(data))
        response.send(true)
    }, (err) => console.log('err from update-schedule: ' + (data)).catch((err) => console.log('err from catch: ' + err)))
}
module.exports={
    enterNewSchedule
}