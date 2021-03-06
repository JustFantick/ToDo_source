import React, { Component } from 'react';
import ChosenFile from '../chosen-file/chosen-file.jsx';

class AddFile extends Component {
	constructor(props) {
		super(props)

		this.dragStartHandler = this.dragStartHandler.bind(this);
		this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
		this.showChosenFiles = this.showChosenFiles.bind(this);
	}

	dragStartHandler(e) {
		e.preventDefault();
		document.querySelector('.add-file').classList.add('active');

	}
	dragLeaveHandler(e) {
		e.preventDefault();
		document.querySelector('.add-file').classList.remove('active');
	}

	componentDidMount() {
		let input = document.querySelector('.add-file__input');
	}

	showChosenFiles() {
		let input = document.querySelector('.add-file__input');
	}

	render() {
		return (
			<div className='add-file'>
				<div className='add-file__button'
					onDragStart={this.dragStartHandler}
					onDragLeave={this.dragLeaveHandler}
					onDragOver={this.dragStartHandler}
					onDrop={this.props.onDropHandler}
				>
					<label className='add-file__label' htmlFor='file'>
						Press or drop file here
					</label>
					<input onChange={this.props.addFile} tabIndex={-1}
						className='add-file__input' type={'file'} name={'file'} />
				</div>
				<ul className='add-file__chosen'>
					{
						this.props.tasksList[this.props.currentTask] ?
							this.props.tasksList[this.props.currentTask].files.map((file, index) => (
								<ChosenFile index={index} key={index}
									fileHref={this.props.tasksList[this.props.currentTask].filesURL[index]}
									fileName={file.name} func={this.props.deleteFile} />
							)) : ''
					}
				</ul>
			</div>

		);
	}
}

export default AddFile;