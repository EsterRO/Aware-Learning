const dal = require("../dal/dal.js")

tableName="Files"

//כאן אני אוחזת בס"ד!!!!!!!!!!!!!!
//פונקצית הוספת קובץ!!
function AddNewFile(request, response){
    const query=`INSERT INTO ${tableName} VALUES ${request.SubjectNum},${request.FileCategory},${request.NameFile},${request.RoutingFile},${request.EndingFile},${request.UpdateDateFile}`
    dal.executeAsync(query,request.body,response).then((data)=>{
        console.log ('was updated new File: '+JSON.stringify(data))
         response.send(1)
      },(err)=>console.log('err from Login.UpdateAddnewFile: '+(data)).catch((err)=>console.log('err from cath: '+err)))
}

module.exports={
    AddNewFile
}