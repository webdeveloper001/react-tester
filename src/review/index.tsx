import * as React from 'react';

import './style.scss';

class ReviewForm extends React.Component {
	
	props: any;

	constructor(props){
		super(props);
		console.log(this.props);
	}

	render() {
		let ingredients = [];
		this.props.data.formular_info.ingredients.map((item, index) => {
			ingredients.push(<li key={index}>
					<label> {item.name}</label>
					<span> {item.percent}% </span>
				</li>)
		})
		return (
			<div className="review-form">
				<div>
					<h2> Patient Info </h2>
					<label> Name: </label> <span> {this.props.data.patient_info.name} </span> <br/>
					<label> Address: </label> <span> {this.props.data.patient_info.address} </span> <br/>
					<label> Birthday: </label> <span> {this.props.data.patient_info.birthday} </span>
				</div>
				<div>
					<h2> Formular Info </h2>
					<label> Formular Name: </label> <span> {this.props.data.formular_info.formular} </span> <br/>
					<label> Ingredients: </label>
					<ul>
						{ingredients}
					</ul>
				</div>
			</div>
		);
	}
}

export default ReviewForm;