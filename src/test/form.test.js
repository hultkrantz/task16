import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import TheForm from '../form.js';
import { shallow } from 'enzyme';


// Check for render
it('Does it render?', () => {
	const div = document.createElement('div');
	ReactDOM.render(<TheForm />, div);
});
// Check for shallow render
test('The shallow render', () => {
	shallow(<TheForm/>);
});
// Check state name change
test('user change name in state.', () => {
	const input = 'Carl';
	let wrapper = shallow(<TheForm />);
	wrapper.find('input [id="formName"]').simulate('change', {
		target: {
			value: input,
			name : "inputName"
		},
		type: 'change'
	});
	let actual = wrapper.state('inputName');
	expect(actual).toBe(input);
})
// Check state email change
test('user change email in state.', () => {
	const input = 'mail';
	let wrapper = shallow(<TheForm />);
	wrapper.find('input [id="formEmail"]').simulate('change', {
		target: {
			value: input,
			name : "inputEmail"
		},
		type: 'change'
	});
	let actual = wrapper.state('inputEmail');
	expect(actual).toBe(input);
})