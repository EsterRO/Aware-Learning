const dal=require("../dal/dal")

tableNameS="Subjects"
function enterNewSubject(request,response){
    console.log(request.body)
    const query=`INSERT INTO ${tableNameS} VALUES(${request.body.specializationsNum},'${request.body.subjectName}','${request.body.userId}')`
    console.log(query)
    dal.executeAsync(query, request.body, response).then((data) => {
        
        console.log('data from enterSubject: '+data )
        response.send(true)
    }, (err) => console.log('err from enterSubject: ' + err)).catch((err) => console.log('err from catch: ' + err))
}
module.exports={
    enterNewSubject
}