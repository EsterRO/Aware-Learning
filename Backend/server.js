let express = require('express')
let path = require('path')
const bd = require('body-parser')
const cors = require('cors')

let app = express()
const Role_route = require("./routes/Role.route")



app.use(bd.json())
app.use(bd.urlencoded())
Role_route.route(app)

// app.get('/', function (req, res) {

//     var sql = require("mssql");

//     // config for your database

//     var config = {
//         user: 'DESKTOP-DTGJORI\LEA-HOME',
//         // password: 'mypassword',
//         server: 'localhost',
//         database: 'learning_from_distance'
//     };



//     // connect to your database
//     sql.connect(config, function (err) {
//         // enableArithAbort= true
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();

//         // query to the database and get the records
//         request.query('select * from Roles', function (err, recordset) {

//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);

//         });
//     });
// });

// function MySqlError(err, res) {
//     res.status(500).json({
//         STATUS: 'FAILURE',
//         MESSAGE: 'DataBase error',
//         DATA: err
//     })
// }

app.get('/', function (req, res) {

   var sql = require("mssql");

   //  config for your database
   var config = {
      user: 'sa',
      password: '123456',
      server: 'localhost',
      database: 'learning_from_distance'
   };

   //  connect to your database
   sql.connect(config, function (err) {

      if (err) console.log(err);

      //   create Request object
      var request = new sql.Request();

      //   query to the database and get the records
      request.query('select * from Roles', function (err, recordset) {

         if (err) console.log(err)

         // send records as a response
         res.send(recordset);

      });
   });
});







app.listen(process.env.PORT || 3000, () => { console.log("server is listening on port 3000") })