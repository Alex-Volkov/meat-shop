import React from 'react';
import ApiWorker from '../actions/actions.js';

class LanguageSelector extends React.Component {
	constructor() {
		super();
		this.apiWorker = new ApiWorker();
	}

	componentDidMount() {

	}

	setLanguage(language) {
		this.apiWorker.changeLanguage(language);
	}

	render() {
		let lang = this.props.lang.map((elem) => {
			let className = elem.active ? 'active' : '';
			return <a onClick={(evt) => {
				this.setLanguage(elem.name);
				evt.preventDefault()
			}} className={className} key={elem.name}>{elem.name}</a>
		});

		return (

			<div className="language-selector pull-right">
				{lang}

			</div>


		)
	}
}

export default LanguageSelector;