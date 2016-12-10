import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx'
import Footer from './footer.jsx'
import Body from './body.jsx'
import ApiWorker from '../actions/actions.js';

class Main extends React.Component {
	constructor() {
		super();
		this.geo = {latitude: 41.3944645, longitude: 2.176275};
		this.apiWorker = new ApiWorker();
		this.state = this.apiWorker.changeLanguage('es');
	}

	componentDidMount() {
		this.apiWorker.addListener('newLanguage', (data) => {
			this.setState(this.apiWorker.extend([{}, this.state, data]))
		});
		this.apiWorker.addListener('flickrData', (data) => {
			let flickrData = Object.assign({}, this.state);
			data.forEach((elem, index) => {
				flickrData.body.images[index].image = elem.url;
			});

			this.setState(flickrData);
		})
	}

	render() {
		return (
			<div>
				<Header items={this.state.header}/>
				<Body items={this.state.body}/>
				<Footer items={this.state.footer}/>
			</div>

		)
	}
}

ReactDOM.render(<Main/>, document.getElementById('main'));
