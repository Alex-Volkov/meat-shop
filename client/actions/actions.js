import {EventEmitter} from 'fbemitter'
import {defaults} from './defaults';
import * as $ from 'jquery';

class ApiWorker extends EventEmitter {
	constructor() {
		super();
		// making it singlton
		if (typeof ApiWorker.instance === 'object') {
			return ApiWorker.instance;
		}
		// default coordinates (Barcelona centre)
		this.geo = {latitude: 41.3944645, longitude: 2.176275};
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('coordinates received', position.coords);
			this.geo = position.coords;
			this.sendCoordinates();
		}, (err) => {
			console.log(err.message, 'using default coordinates');
			this.sendCoordinates();
		});

		ApiWorker.instance = this;
		return this;
	}

	extend(params) {
		return $.extend(true, ...params);
	}

	/**
	 * for twitter and google maps we need to get coordinates first
	 * @returns {number|string|Coordinates|*|{latitude: number, longitude: number}}
	 */
	sendCoordinates() {
		this.emit('geoUpdated', this.geo);
		this.getFlickerData();
		this.getTwitterData();
		return this.geo;
	}

	/**
	 * changing language of user interface
	 * @param language
	 * @returns {*}
	 */
	changeLanguage(language) {
		let obj = $.extend(true, {}, defaults[language]);
		this.emit('newLanguage', obj);
		return obj;

	}

	/**
	 * getting images from flickr, default seek pattern is "raw meat"
	 */
	getFlickerData() {
		$.ajax({
			url: '/api/flickr/search', method: 'GET', dataType: 'json', success: (data) => {
				this.emit('flickrData', data);
			}
		});
	}

	/**
	 * getting tweets with "meat is healthy" keyword
	 */
	getTwitterData() {
		$.ajax({
			url: '/api/twitter/search',
			method: 'POST',
			dataType: 'json',
			data: {geo: this.geo, keyword: 'meat is healthy'},
			success: (data) => {
				console.log(data.statuses);
				let tweets = data.statuses.map((elem) => {
					return {
						id: elem.id_str,
						text: elem.text,
						userScreenName: elem.user.screen_name,
						userName: elem.user.name,
						imageUrl: elem.user.profile_image_url
					}
				});
				this.emit('twitterData', tweets)
			}
		});
	}

}

export default ApiWorker;