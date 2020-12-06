const dal=require("../dal/dal")

tableName="Subjects"

function enterNewSubject(request,response){
    const query=`INSERT INTO ${tableName} VALUES(${request.SpecializationNum},'${request.SubjectName}','${request.UserId}')`
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('data from enterSubject: ' + JSON.stringify(data))
        response.send(true)
    }, (err) => console.log('err from enterSubject: ' + (data)).catch((err) => console.log('err from catch: ' + err)))
}
module.exports={
    enterNewSubject
}