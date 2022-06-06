module.exports = app => {
    const controller = app.controllers.students

    app.route('/api/students').get(controller.listStudents)
}