import React from 'react';

class Form extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className="container form-section">
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="text" className="form-control" placeholder="introduzca su email" id="email"
								   required/>

						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label htmlFor="email">Telefono</label>
							<input type="text" className="form-control"
								   placeholder="introduzca su numero de telefono (opcional)" id="email"/>

						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label htmlFor="email">Telefono</label>
							<textarea name="message" id="message" cols="30" rows="10" className="form-control">

						</textarea>

						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button className="btn btn-default pull-right">
							Enviar
						</button>

					</div>
				</div>

			</div>

		)
	}
}

export default Form;