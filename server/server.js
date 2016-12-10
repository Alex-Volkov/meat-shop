const express = require('express');
const path = require('path');
const port = process.argv[2] || 8080;
const Tweet = require('./tweet');
const Flickr = require('./flickr');
const app = express();
const tweet = new Tweet();
const flickr = new Flickr();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/twitter/search', (req, res) => {
	tweet.search(req, res)
});
app.get('/api/flickr/search', (req, res) => {
	flickr.search(req, res);
});
app.get('*', express.static(path.resolve('client')));

app.listen(port, (err) => {
	if (err) {
		console.log(err);
		return err;
	}
	console.log(`listen on ${port}`);
});