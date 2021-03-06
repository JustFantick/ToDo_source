import React, { Component } from 'react';
import Status from '../status/status.jsx';
import DeleteStep from '../delete-step/delete-step.jsx';

class Step extends Component {
	render() {
		return (
			<li className='step' onClick={this.props.func} index={this.props.index}>
				<Status status={this.props.stepStatus} pc={21} mb={17}
					statusChangeHandler={this.props.stepStatusChangeHandler} />

				<div
					className={this.props.stepStatus ? "step__title done" : "step__title"}
					contentEditable="true"
					suppressContentEditableWarning="true"
					onBlur={this.props.onTaskStepChange}
					onKeyDown={this.props.enterHandler}
				>
					{this.props.text}
				</div>

				<DeleteStep pc={23} mb={19} />
			</li>
		);
	}
}
export default Step;