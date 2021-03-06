import React, { Component } from 'react';
import Status from '../status/status.jsx';
import StepsList from '../steps-list/steps-list.jsx';
import Step from '../step/step.jsx';

class SidebarHeader extends Component {
	constructor(props) {
		super(props);
		this.interactInput = this.interactInput.bind(this);
		this.enterHandler = this.enterHandler.bind(this);
	}

	interactInput(e) {
		let target = e.target;
		let plus = document.querySelector('.add-step__plus');
		let input = document.querySelector('.add-step__title');
		let parent = document.querySelector('.add-step');

		if (target === input || target === plus && !parent.classList.contains('focused')) {
			parent.classList.add('focused');
			input.focus();

			document.querySelector('.wrapper').addEventListener('click', function (e) {
				if (!e.target.closest('.add-step'))
					parent.classList.remove('focused');
			}, { 'once': true })
		} else if (target === plus && parent.classList.contains('focused')) {
			parent.classList.remove('focused');
			input.value = '';
		}
	}

	enterHandler(e) {
		if (e.which == 13) e.target.blur();
	}

	render() {
		return (
			<div className='sidebar-header'>
				<div className="sidebar-task">
					<Status mb={20} pc={25}
						status={this.props.tasksList[this.props.currentTask] ? this.props.tasksList[this.props.currentTask].taskStatusDone : false}
						statusChangeHandler={this.props.taskStatusChangeHandler} />
					<div
						className={
							this.props.tasksList[this.props.currentTask]
								?
								this.props.tasksList[this.props.currentTask].taskStatusDone ? "sidebar-task__title done" : "sidebar-task__title"
								: "sidebar-task__title"
						}
						contentEditable="true"
						tabIndex={-1}
						suppressContentEditableWarning="true"
						onBlur={this.props.onTitleChange}
						onKeyDown={this.enterHandler}
					>
						{
							this.props.tasksList[this.props.currentTask] ?
								this.props.tasksList[this.props.currentTask].title : ''
						}
					</div>
				</div>
				<ul className='steps-list'>
					{
						this.props.tasksList[this.props.currentTask] ?
							this.props.tasksList[this.props.currentTask].steps.map((step, index) => (
								<Step
									key={index}
									text={step.title}
									index={index}
									stepStatus={step.stepDone}
									stepStatusChangeHandler={this.props.stepStatusChangeHandler}
									func={this.props.deleteStep}
									onTaskStepChange={this.props.onTaskStepChange}
									enterHandler={this.enterHandler}
								/>
							)) : ''
					}
				</ul>

				<div className='add-step' onClick={this.interactInput}>
					<div className="add-step__plus" ></div>
					<input type={'text'} placeholder='Enter next step`s title'
						name='stepName'
						className="add-step__title" onKeyDown={this.props.addStep} />
				</div>
			</div >
		);
	}
}

export default SidebarHeader;