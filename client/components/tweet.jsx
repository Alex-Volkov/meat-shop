import React from 'react';
import ApiWorker from '../actions/actions.js';

class Tweet extends React.Component {
	constructor() {
		super();
		this.apiWorker = new ApiWorker();
		this.state = {
			tweets: []
		}
	}

	componentDidMount() {
		this.apiWorker.addListener('twitterData', (tweets) => {
			this.setState({tweets})
		});
	}

	render() {
		let tweets = this.state.tweets.map((elem) => {
			return <li key={elem.id}>
				<div className="tweet-header">
					<img src={elem.imageUrl} alt=""/>
					<div className="tweet-user">
						<p className="tweet-screen-name">{elem.userScreenName}</p>
						<p className="tweet-user-name">{elem.userName}</p>
					</div>
				</div>
				<div className="tweet-body">
					<a href={`https://twitter.com/${elem.userScreenName}/statuses/${elem.id}`} target="_blank">
						{elem.text}
					</a>
				</div>
			</li>
		});
		return (
			<div className="container">
				<ul id="tweets">
					{
						tweets
					}
				</ul>
			</div>
		)
	}
}

export default Tweet;