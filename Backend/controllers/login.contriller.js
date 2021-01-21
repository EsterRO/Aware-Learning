const { DateTime } = require("mssql")
const dal = require("../dal/dal.js")


tableNameU = "Users"
tableNameT = "Times"
/* function Login(request, response) {
    const query = `SELECT ISNULL((SELECT Id FROM ${tableName} WHERE Id='${request.query.Id}'),0)`
=======
tableName = "Users"
tableNameT = "Times"
roletable = "Roles"
var session = require('express-session')


var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(session({
    genid: function (req) {
        return genuuid() // use UUIDs for session IDs
    },
    secret: 'keyboard cat'
}))

app.get('/', function (req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})

req.session.regenerate(function(err) {
    // will have a new session here
  })
function Login(request, response) {

    // var config = {
    // WHERE Id='${request.query.Id}

    const query = `SELECT * FROM ${tableName} f WHERE f.Id=${request.query.Id} `

    dal.executeAsync(query, request.body, response).then((data) => {
        // console.log(data.recordset[0])
        // console.log(data.recordset[0].Id )
        if (data.recordset[0]) {
            // var idRole= `SELECT RoleNum FROM ${roletable} r WHERE r.RoleNum='${data.recordset[0].Rol_}'`
            // dal.executeAsync(idRole, request.body, response).then((role)=>{
            //     console.log(role)
            // })
            time = Date.now();
            dal.executeAsync(t, request.body, response).then((x) => {
                console.log(x)
            }, (err) => console.log('err from Login.UpdateEnterTimeUser: ' + (x)).catch((err) => console.log('err from cath: ' + err)))

            response.send(String(data.recordset[0].Rol_))



        }
        else

            response.send(true)
    }, (err) => console.log('err from Login: ' + (data)).catch((err) => {
        return console.log('err from catch: ' + err)
    }))

            response.send(false)


    }, (err) => console.log('err from Login: ' + (data)).catch((err) => console.log('err from catch: ' + err)))

}

// function doCall(urlToCall, callback) {
//     urllib.request(urlToCall, { wd: 'nodejs' }, function (err, data, response) {                              
//         var statusCode = response.statusCode;
//         finalData = getResponseJson(statusCode, data.toString());
//         return callback(finalData);
//     });
// }

function SelectRoleById(request, response) {
    const query = `SELECT Rol_ from ${tableName} WHERE Id='${request.query.Id}'`
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('data from Login.SelectRoleById: ' + JSON.stringify(data))
        response.send(data)
    }, (err) => {
            return console.log('err from Login.SelectRoleById: ' + (data)).catch((err) => console.log('err from catch: ' + err))
        })
}

function UpdateEnterTimeUser(request,response){
    const query=`INSERT INTO ${tableNameT} VALUES ('${request.userId}',${request.FromTime})`
    dal.executeAsync(query,request.body,response).then((data)=>{
      console.log ('was updated enter time: '+JSON.stringify(data))
       response.send('was updated enter time')
    },(err)=>console.log('err from Login.UpdateEnterTimeUser: '+(data)).catch((err)=>console.log('err from cath: '+err)))
} */
function Login(request, response) {
    console.log('tttttt')
    const query = `SELECT * FROM ${tableNameU} f WHERE f.Id='${request.query.Id}' `
    console.log(query)
    dal.executeAsync(query, request.body, response).then((data) => {
      console.log(data.recordset[0])
        // console.log(data.recordset[0])
        // console.log(data.recordset[0].Id )
        
            if (data.recordset[0]) {
                
               var time= new Date()
               const queryT = `INSERT INTO ${tableNameT} VALUES ('${request.query.Id}',getdate(),'',0)`
               console.log(queryT)
                dal.executeAsync(queryT, request.body, response).then((data) => {
                    console.log(data)
                    
                }, (err) => console.log('err from Login.UpdateEnterTimeUser: ' + err)).catch((err) => console.log('err from cath: ' + err))
                response.send(String(data.recordset[0].Rol_))
            }
            else
                response.send(false)
        } ,(err) => console.log('err from Login: ' + err).catch((err) => console.log('err from catch: ' + err)))
    }

function SelectRoleById(request, response) {
    const query = `SELECT Rol_ from ${tableName} WHERE Id='${request.query.Id}'`
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('data from Login.SelectRoleById: ' + JSON.stringify(data))
        response.send(data)
    }, (err) => console.log('err from Login.SelectRoleById: ' + err)).catch((err) => console.log('err from catch: ' + err))
}

//בעיה
function UpdateEnterTimeUser(request, response) {

    console.log(request.body)
    const query = `INSERT INTO ${tableNameT} VALUES ('${request.userId}',${request.FromTime})`
    dal.executeAsync(query, request.body, response).then((data) => {
        console.log('was updated enter time: ' + data)
        response.send('was updated enter time')
    }, (err) => console.log('err from Login.UpdateEnterTimeUser: ' + err)).catch((err) => console.log('err from cath: ' + err))
    

     
}

module.exports = {
    Login,
    SelectRoleById,
    UpdateEnterTimeUser
}
