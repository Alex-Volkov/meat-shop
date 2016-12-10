import React from 'react';

class Footer extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {

	}

	render() {
		return (
			<footer>
				<div className="image-holder"></div>
				<div className="container">
					<p>{this.props.items.text}</p>
				</div>
			</footer>

		)
	}
}

export default Footer;
