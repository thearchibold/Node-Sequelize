let express = require('express');

const router = express.Router();
const User = require('./../models/User.ts');

router.get('/', (req, resp) => {
	User.findAll()
		.then((data) => {
			resp.status(200).send(data);
		})
		.catch((err) => {
			resp.status(400).send(err);
		});
});

module.exports = router;
