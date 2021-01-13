const express = require('express')
const app = express()
const path = require('path')
const bd = require('body-parser')
const cors = require('cors')
const login_route=require('./routes/Login.route')
const user_route=require('./routes/User.route')
const student_route=require('./routes/student.route')
const file_route=require('./routes/file.route')
const schedule_route=require('./routes/schedule.route')
const specialization_route=require('./routes/specialization.route')
const subject_route=require('./routes/subject.route')

app.use(cors())
app.use(bd.json())
app.use(bd.urlencoded())

student_route.route(app)
login_route.route(app)
user_route.route(app)
file_route.route(app)
schedule_route.route(app)
specialization_route.route(app)
subject_route.route(app)
//-------------------------------------------------------------------------------------------------------

/* app.get('/', function (req, res) {

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
}); */


//----------------------------------------------------------------------------




app.listen(process.env.PORT || 3000, () => { console.log("server is listening on port 3000") })