const commonService = require("../common/service")

const sql = require('mssql')

var config = {
    user: `sa`,
    password: 'a1234',
    server: 'localhost',
    database: 'learning_from_distance',
    "options": {
        "encrypt": true,
        "enableArithAbort": true,
        "tedious": true
    }
};

/* values, */
function executeAsync(query, values, res) {

    return new Promise(function (resolve, reject) {
        sql.connect(config).then(() => {
            var request = new sql.Request();
            request.query(query, function (err, result) {
                if (err) {
                    reject(err);
                    //commonService.MySqlError(err, res)
                }
                else {
                    console.log('rrrr')
                    resolve(result);
                    

                }
            })
        })

    })
}


module.exports = {
    executeAsync
}





