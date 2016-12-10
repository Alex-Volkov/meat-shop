import React from 'react';
import LanguageSelector from './language.jsx';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {activated: false};
	}

	componentDidMount() {

	}

	toggleMenu() {
		this.setState({activated: !this.state.activated});
	}

	render() {
		let items = null;
		const menuClasses = ['row', 'menu-items'];
		if (this.props.items && !!this.props.items.menuItems) {
			items = this.props.items.menuItems.map((elem) => {
				return <li key={elem.name} className="col-md-3">
					<a href={elem.url}>
						{elem.name}

					</a>
				</li>
			})
		}
		let mobileMenuClasses = menuClasses.slice();
		if (this.state.activated) {
			mobileMenuClasses.push('activated')
		}
		mobileMenuClasses = mobileMenuClasses.join(' ');
		return (
			<nav >
				<div className="container">
					<div className="row mobile-menu">

						<div className="container"><i className="fa fa-bars" aria-hidden="true"
													  onClick={() => this.toggleMenu()}/>
							<span>menu</span>
							<LanguageSelector lang={this.props.items.languages}/>
							<ul className={mobileMenuClasses}>
								{items}
							</ul>
						</div>
					</div>
					<div className="desktop-menu">
						<ul className="row menu-items">
							{items}
						</ul>
						<LanguageSelector lang={this.props.items.languages}/>
					</div>
				</div>

			</nav>

		)
	}
}

export default Header;