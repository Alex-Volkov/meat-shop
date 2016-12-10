import React from 'react';


class Icons extends React.Component {
	constructor() {
		super();

	}

	componentDidMount() {

	}

	render() {
		let data = this.props.items.icons;
		// console.log(data);
		return (
			<div className="container icons-section">
				{
					data.map((elem) =>{
						return <div className="col-md-4 col-sm-4 col-xs-12" key={elem.icon}>
							<a href={elem.link}>
								<i className={'fa ' + elem.icon}/>

							</a>
						</div>
					})
				}
			</div>

		)
	}
}

export default Icons;