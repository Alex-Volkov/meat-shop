const Twitter = require('twitter-node-client').Twitter;

class Tweet {
	constructor() {
		this.twitter = null;
		this.auth();
	}

	error(err) {
		console.log(err);
	}

	auth() {
		let config = {
			"consumerKey": "M2PfgyfFNpHsHx9f75I8YQ",
			"consumerSecret": "0xzAVKiozLd1MOUwC8DLmcDdfGfawqrr4A4j9jQUY",
			"accessToken": "224319214-OpTfEMo1GIreOkFurIFClWpIBVcvd9zYW2BegSeF",
			"accessTokenSecret": "kLri6LYubEcy25IK5bqdMcx8VH5UFuqTj2HQMocbOMmuU",
			"callBackUrl": "http://127.0.0.1:8080/api/twitter/callback"
		};
		this.twitter = new Twitter(config);
	}

	search(req, res) {
		let geo = req.body.geo;
		let query = `"${req.body.keyword}"` || '"meat is healthy"';
		this.twitter.getSearch({
			'q': query,
			'count': 5,
			'include_entities': false,
			// 'geocode': `${geo.latitude},${geo.longitude},10000mi`
		}, this.error, (data) => {
			res.end(JSON.stringify(JSON.parse(data)))
		});

	}
}
module.exports = Tweet;