const router = require('express').Router();

const User = require('./../models/User.ts');

router.get('/:id', (req, resp) => {
	let id = req.params.id;
	User.destroy({
		where: {
			id: id
		}
	})
		.then(() => {
			resp.status(200).send('User deleted');
		})
		.catch((err) => {
			resp.status(500).send(err);
		});
});

module.exports = router;
