const dal= require("../dal/dal.js")
const { successResponse } = require("../common/service.js")



    
    function CreateNewCall(request,response)
    {
        tableName="Roles"
        console.log('gggg')
      //  const query = `INSERT INTO ${tableName} VALUES('${request.body.requestDetails}','${request.body.password}',0)`

        const query = `INSERT INTO ${tableName} VALUES('${request.body.requestDetails}','${request.body.password}')`
        'select * from Roles'
        /* 
        request.query('select * from Roles', function (err, recordset) {

            //             if (err) console.log(err)
            
            //             // send records as a response
            //             res.send(recordset);
            
            //         }); */
           /*  request.body,
 */
       const promise= dal.executeAsync(query, request.body,response)
        //successResponse("create succesfully",data,response)
        console.log('gggg')
        promise.then((data) => {
            //console.log('data from CreateNewUser: ' + data)
        },
            (err) => console.log('err from role: ' + err)).catch((err) => console.log(err))
    
       /*  if (data!=undefined) {
            console.log('result: '+data.value);
            
        }
        else{
            console.log('rolecontrol')
        } */
    }

    module.exports={
     CreateNewCall
    }
