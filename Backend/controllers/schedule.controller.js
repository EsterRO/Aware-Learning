const dal = require("../dal/dal")


tableName = "Schedule"

function enterNewSchedule(request, response) {
    console.log('enterSchedule')
    console.log(request)
    const query = `INSERT INTO ${tableName} VALUES(${request.body.ScheduleDate},${request.body.SpecializationNum},${request.body.SubjectNum})`
    console.log(query)
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log("data from update-schedule: " + response)
        response.send(true)
    }, (err) => console.log('err from update-schedule: ' + err)).catch((err) => console.log('err from catch: ' + err))
}
function GetAllSubjectsFromSchedule(request, response) {
    const query = `select su.SubjectName
    from ${tableName} sc join [dbo].[Subjects] su 
    on sc.SubjectNum=su.SubjectNum
    where sc.ScheduleDate=GETDATE()`
    dal.executeAsync(query, request.body, response).then(data => {
        console.log("data from GetAllSubjectsFromSchedule: " + response)
        response.send(response)
    }, (err) => console.log('err from GetAllSubjectsFromSchedule: ' + err)).catch((err) => console.log('err from catch: ' + err))
}
module.exports = {
    enterNewSchedule,
    GetAllSubjectsFromSchedule
}