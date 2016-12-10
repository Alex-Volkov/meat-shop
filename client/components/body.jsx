import React from 'react';
import Presentation from './presentation.jsx'
import Images from './images.jsx'
import Icons from './icons.jsx'
import Form from './form.jsx'
import Map from './map.jsx'
import Tweet from './tweet.jsx'
class Body extends React.Component {
	render() {
		return (
			<div className="body-section">
				<div className="container">
					<div className="row">

						<Presentation items={this.props.items}/>
						<Images items={this.props.items}/>
						<Icons items={this.props.items}/>
						<Map/>
						<Tweet/>
						<Form/>
					</div>
				</div>
			</div>
		)
	}
}

export default Body;