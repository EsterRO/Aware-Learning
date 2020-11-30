const StudentController = require('../controllers/student.controller')


function route(app) {
    app.get("/api/student", (req, res) => {
        StudentController.TrackingStudents(req, res)
    })
}
module.exports={
    route
}