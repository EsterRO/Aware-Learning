const dal=require('../dal/dal')

tableName="Users"


function TrackingStudents(request,response){
    const query=`select u.LastName,u.FirstName, u.Id,u.Adress,t.ClassNum,t.FromTime,t.ToTime
    from ${tableName} u join Times t on u.Id=t.UserId
    where u.Rol_=2`
    dal.executeAsync(query,request,response).then((data)=>{
        console.log("data from TrackingStudents: "+JSON.stringify(data))
        response.send(data)
    },(err) => console.log('err from TrackingStudents: ' + err)).catch((err) => console.log('err from catch: ' + err))
   
}
module.exports={
    TrackingStudents
}