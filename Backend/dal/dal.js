const commonService = require("../common/service")
const sql = require('mssql')

var config = {
    user: `sa`,
    password: '12345',
    server: 'localhost',
    database: 'learning_from_distance'
};

// function executeAsync(query, values, res) {
//     return new Promise(function (resolve, rejects) {
//         sql.connect(config).then(() => {
//             var request = new sql.Request();
//             request.query(query, function (err, result) {
//                 if (err) {
//                     rejects(err);
//                     //commonService.MySqlError(err, res)
//                 }
//                 else {
//                     resolve(result);
//                 }
//             })
//         })
//     }).catch((err)=>console.log('err from promise '+err));
// }

function executeAsync(query, values, res) {
    return new Promise(function (resolve, reject) {
        sql.connect(config).then(() => {
            var request = new sql.Request();
            request.query(query,function(err, result) {
                if (err) {
                    reject(err);
                    //commonService.MySqlError(err, res)
                }
                else {
                    resolve(result);
                }
            })
        })

    })
}


module.exports = {
    executeAsync
}