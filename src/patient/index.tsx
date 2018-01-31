import * as React from 'react';

import './style.scss';

class PatientForm extends React.Component {

	state: any = {
		name: "",
		address: "",
		birthday: ""
	}

	constructor(props) {
		super(props);
		this.getData = this.getData.bind(this);
	}
	
	getData() {
		return this.state;
	}

	render() {
		return (
			<div className="patient-form">
				<div>
					<label> Name: </label> 
					<input type="text" value={this.state.name} 
						onChange={ev => {this.setState({name: ev.target.value});}} />
				</div>
				<div>
					<label> Address: </label> 
					<input type="text" value={this.state.address} 
						onChange={ev => {this.setState({address: ev.target.value});}}/>
				</div>

				<div>
					<label> birthday: </label> 
					<input type="date" value={this.state.birthday} 
						onChange={ev => {this.setState({birthday: ev.target.value});}}/>
				</div>
			</div>
		);
	}
}

export default PatientForm;