const RoleController = require("../controllers/Role.controller.js")
const commonService = require("../common/service")
const { CheckPassword } = require("../controllers/Role.controller");


function route(app) {
    app.post("/api/createNewCall", (req, res) => {
        let data = req.body
        console.log('data');
        var result = RoleController.CreateNewCall(req, res);
    })
}

module.exports = {
    route
}