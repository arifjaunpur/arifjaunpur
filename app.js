const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
	console.log(`${new Date()} ${req.method}: ${req.url}`);
	next();
})

app.use(express.static('./public'));



app.use((req, res) => {
	res.send('You are able to access');
})

app.listen(port, () => {
	console.info(`${new Date()} application running on port: ${port}`);
});