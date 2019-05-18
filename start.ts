const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);

app.get('/', (req, resp, next) => {
	console.log(req.method);
	resp.status(200).send('Hello there');
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
