import * as React from 'react';

import './style.scss';

class FormularForm extends React.Component {
	
	state: any = {
		ingredients: [
			{ name: 'Ing1', min: 10, max: 80}, 
			{ name: 'Ing2', min: 1, max: 90},
			{ name: 'Ing3', min: 90, max: 95}
		],
		formular: [
			{ 
				name: 'Form1',
				ingredients: [0, 2]
			},
			{
				name: 'Form2',
				ingredients: [0, 1]
			},
			{
				name: 'Form3',
				ingredients: [2,1]
			}
		], 
		form_ing: [
			[20, 10],
			[30, 50],
			[10, 80]
		],
		data: null
	}
	ings: any = [];
	options: any = [];

	constructor(props) {
		super(props);
		this.options.push(<option key="-1"> --- </option>);
		this.state.formular.map((item, index) => {
			this.options.push(<option key={index} value={index}> {item.name} </option>);
		})

		this.handleChange = this.handleChange.bind(this);
		this.handleIngChange = this.handleIngChange.bind(this);
	}

	getData() {
		return this.state.data
	}

	handleIngChange(ev) {
		console.log(ev.target);
	}

	handleChange(ev) {
		console.log(ev.target.value);
		let form_index = ev.target.value;
		let ings_data = [];
		this.ings = [];
		this.state.formular[form_index].ingredients.map((item, index) => {
			let ing = this.state.ingredients[item];
			this.ings.push(<div key={index}>
				<label> {ing.name} </label>
				<input type="range" min={ing.min} max={ing.max} 
					defaultValue={this.state.form_ing[form_index][index]} 
					onChange={this.handleIngChange} />
			</div>)
			ings_data.push({
				name: ing.name,
				percent: this.state.form_ing[form_index][index]
			})
		})
		console.log(this.ings);
		this.setState({
			data: {
				formular: this.state.formular[form_index].name, 
				ingredients: ings_data
			}
		})
	}

	render() {
		return (
			<div className="formular-form">
				<select onChange={this.handleChange} >
					{this.options}
				</select>
				<div>
					{this.ings}
				</div>
			</div>
		);
	}
}

export default FormularForm;