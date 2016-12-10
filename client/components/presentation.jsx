import React from 'react';

class Presentation extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {

	}

	render() {
		let data = this.props.items;
		return (
			<div className="container promo-section">
				<h1>{data.primary.header}</h1>
				<p>{data.primary.text}</p>
				{
					data.secondary.map((elem) =>{
						return <div className="section" key={elem.header}>
							<h2>{elem.header}</h2>
							<p>{elem.text}</p>
						</div>
					})
				}
			</div>

		)
	}
}

export default Presentation;