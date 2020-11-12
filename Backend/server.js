const express= require("express");
const app = express();
const bd=require('body-parser')
app.use(bd.json())
app.use(bd.urlencoded())
/* var express = require('express');
var app = express();
app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'MYMY\User',
       // password: 'mypassword',
        server: 'MYMY', 
        database: '[learning_from_distance]',
        "options": {
            "encrypt": true,
            "enableArithAbort": true
            }, 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from [Roles]', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});
});
 */
var server = app.listen(5000, function () {
    console.log('Server is running..');})