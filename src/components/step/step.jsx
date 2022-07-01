import React, { Component } from 'react';
import Status from '../status/status.jsx';
import DeleteStep from '../delete-step/delete-step.jsx';

class Step extends Component {
	constructor(props) {
		super(props)

		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleFocus(e) {
		let currentParent = e.target.closest('.step');
		currentParent.querySelector('.step__btns').classList.add('active');

		document.querySelector('.wrapper').addEventListener('click', function (e) {
			if (e.target.closest('.step') !== currentParent) {
				currentParent.querySelector('.step__btns').classList.remove('active');
				document.querySelector('.wrapper').removeEventListener('click', function (e) { });
			}
		})
	}
	handleBlur(e) {
		if (e.target !== 0) {
			e.target.closest('.step').querySelector('.step__btns').classList.remove('active');
		}
	}

	render() {
		return (
			<li className='step' onClick={this.props.func}>
				<div className='step__btns'>
					<Status pc={23} mb={19} />
					<DeleteStep pc={23} mb={19} />
				</div>
				<div className="step__title" contentEditable="true" onFocus={this.handleFocus} >{this.props.text}</div>
			</li>
		);
	}
}
export default Step;