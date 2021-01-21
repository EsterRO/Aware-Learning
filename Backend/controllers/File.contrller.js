const dal = require("../dal/dal.js")

tableName="Files"


function AddNewFile(request, response){
    const query=`INSERT INTO ${tableName} VALUES ${request.SubjectNum},${request.FileCategory},${request.NameFile},${request.RoutingFile},${request.EndingFile},${request.UpdateDateFile}`
    dal.executeAsync(query,request.body,response).then((data)=>{
        console.log(data)
       // console.log ('was updated new File: '+JSON.stringify(data))
         response.send(1)
      
      },(err) => console.log('err from Login.UpdateAddnewFile: ' + data)).catch((err) => console.log('err from cath: ' + err))  
}
function GetAllFiles(request,response){
    console.log('GetAllFiles:'+request)
    const query=`SELECT f.* 
    FROM [dbo].[Files]f join [dbo].[Subjects]s on
    f.SubjectNum=s.SpecializationNum
    WHERE f.UpdateDateFile=GETDATE()and s.SubjectName='${request}' `
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('data from File.GetAllFiles: ' + JSON.stringify(response))
        response.send(response)
    }, (err) => console.log('err from File.GetAllFiles: ' + data)).catch((err) => console.log('err from catch: ' + err))
}
module.exports={
    AddNewFile,
    GetAllFiles
}