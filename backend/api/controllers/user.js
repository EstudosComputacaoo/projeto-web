function getUsers(app) {
	const { getUsers, getUser } = app.data.users;

	const controller = {};

	controller.listUsers = async (req, res) => {
		getUsers()
			.then((data) => res.status(200).json(data))
			.catch((error) => console.error(`Error on request users: ${error}`));
	};

	controller.getUserByEmail = async (req, res) => {
		
		getUser(req.body)
			.then((data) => {
				if (data) {
					const json = JSON.parse(JSON.stringify(data));
					delete json.password
					res.status(200).json(json);
				} else res.status(404).json('User not found');
			})
			.catch((error) => console.error(`Error on request users: ${error}`));
	};

	return controller;
}

module.exports = getUsers;
