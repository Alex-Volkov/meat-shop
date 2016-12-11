import React from 'react';

class Presentation extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {

	}

	render() {
		let data = this.props.items.images;
		let imagesClasses = ['img'];
		if(data.length && data[0].image && imagesClasses.indexOf('image-loaded') == -1){
			imagesClasses.push('image-loaded');
		}
		return (
			<div className="container image-secion">
				<div className="row">
				{
					data.map((elem) =>{
						let style = {};
						if(!!elem.image){
							style = {
								backgroundImage: 'url(' + elem.image +')',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat'
							};
						}

						return <div className="col-xs-12 col-sm-6 col-md-3" key={elem.header}>
							<h3>{elem.header}</h3>
							<div className={imagesClasses.join(' ')} style={style}></div>

							<p>{elem.text}</p>
						</div>
					})
				}
				</div>
			</div>

		)
	}
}

export default Presentation;