import React from 'react';
import ApiWorker from '../actions/actions.js';

class Map extends React.Component {
	constructor(props) {
		super();
		this.shopName = props.shopName;
		this.apiWorker = new ApiWorker();
	}

	setMap(position) {
		this.location = new google.maps.LatLng(position.latitude, position.longitude);
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: this.location,
			zoom: 15
		});
		const request = {
			location: this.location,
			radius: '2500',
		};
		/**
		 * we will seek for places with "meat" keyword if shop is not specified
		 */
		if (!!this.shopName) {
			request.name = this.shopName;
		} else {
			request.keyword = ['meat', 'charcuteria', 'xarcuteria'];
		}
		this.service = new google.maps.places.PlacesService(this.map);
		this.service.nearbySearch(request, callback.bind(this));

		function callback(res, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				for (let i = 0; i < res.length; i++) {
					this.createMarker(res[i]);
				}
			}
		}

	}

	createMarker(place) {
		let marker = new google.maps.Marker({
			map: this.map,
			icon: 'images/steak.png',
			position: place.geometry.location
		});

		google.maps.event.addListener(marker, 'click', function () {
			let infowindow = new google.maps.InfoWindow();
			// console.log(place.name);
			infowindow.setContent(place.name);
			infowindow.open(map, this);
		});
	}

	componentDidMount() {
		this.apiWorker.addListener('geoUpdated', (data) => {
			this.setMap(data);
		})
	}

	render() {

		return (
			<div className="container">
				<div id="map"></div>
			</div>
		)
	}

}

export default Map;