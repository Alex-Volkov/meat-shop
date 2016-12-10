const Flickr = require('flickrapi');

class FlickrSearch {
	constructor() {
		let flickrOptions = {
			api_key: "430352209c84b2ad4b54b6703a151bad",
			secret: "4df9eca34057c420"
		};
		Flickr.tokenOnly(flickrOptions, (error, flickr) => {
			this.flickr = flickr;
		})
	}

	search(req, res) {

		if (!this.flickr) return console.log('flickr instance is not set yet');

		this.flickr.photos.search({
			text: "raw meat"
		}, (err, result) => {
			if (err) {
				throw new Error(err);
			}
			res.end(JSON.stringify(this.parseResponse(result).slice(0, 4)));
		})
	}

	parseResponse(data) {
		/**
		 * https://www.flickr.com/services/api/misc.urls.html
		 * https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
		 * b - 1024px width
		 */
		return data.photos.photo.map((elem) => {
			// console.log(elem);
				return {url: `https://farm${elem.farm}.staticflickr.com/${elem.server}/${elem.id}_${elem.secret}_b.jpg`}
			}
		)
	}

}

module.exports = FlickrSearch;