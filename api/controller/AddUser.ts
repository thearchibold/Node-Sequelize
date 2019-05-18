let express = require('express');

const router = express.Router();
const User = require('./../models/User.ts');

router.get('/', (req, resp, next) => {
	if (req.method === 'GET') {
		let { firstname, lastname, age } = req.query;

		console.log(firstname, lastname, age);

		User.create({ firstname, lastname, age })
			.then((data) => {
				resp.status(200).send(`User with name ${data.get('firstname')} added to database`);
				console.log(data);
			})
			.catch((err) => {
				console.error(err);
				resp.status(500).send(err);
			});
	}
});

module.exports = router;
