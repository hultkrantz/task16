import React, {Component} from 'react';

class TheForm extends Component{
	constructor(props) {
		super(props); 
		this.state = {
			inputName : '',
			inputEmail : ''
		};
		this.textChange = this.textChange.bind(this);
	}
	
	textChange(e){
		this.setState({
			[e.target.name]:e.target.value
		});	
	}
	
	render() {
		return (
			<div>
				<form>
					Add your name:<br/>
					<input type="text" id="formName" name="inputName" onChange={this.textChange} value={this.state.inputName}/><br/>
					Enter your email:<br/>
					<input type="text" id="formEmail" name="inputEmail" onChange={this.textChange} value={this.state.inputEmail}/>
				</form>
			</div> 
			);
	}
}

class TheButton extends Component{
	
	render() {
		return (
			<button type="button">Remove from state</button>
		);
	}
}


export default TheForm;