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
				<div className="row">

					<div className="image-holder"></div>
					<div className="container">
						<p>{this.props.items.text}</p>
					</div>
				</div>
			</footer>

		)
	}
}

export default Footer;
