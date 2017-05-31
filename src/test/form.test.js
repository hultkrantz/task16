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
// Check state name change
// Check state emal change
