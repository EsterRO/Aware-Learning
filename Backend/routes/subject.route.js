const SubjectController = require('../controllers/subject.controller.js')


function route(app) {
    app.post("/api/subject", (req, res) => {
        SubjectController.enterNewSubject(req, res)
    })
    app.get("/api/returnNumS/:subName", (req, res) => {
        SubjectController.ReaturnNumS(req, res)
    })
}
module.exports = {
    route
}