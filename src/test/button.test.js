import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import TheButton from '../button.js';
import { shallow } from 'enzyme';


// Check button render
it('Does it render?', () => {
	const div = document.createElement('div');
	ReactDOM.render(<TheButton />, div);
});
// Check button shallow render
test('The shallow render', () => {
	shallow(<TheButton/>);
});