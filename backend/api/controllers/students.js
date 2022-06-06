function students(app) {
	const students = app.data.students;
	const controller = {};

	controller.listStudents = async (req, res) => {
		students.then((data) => res.status(200).json(data)).catch((error) => console.error(`Error on request students: ${error}}`));
	};
	return controller;
}
module.exports = students;
