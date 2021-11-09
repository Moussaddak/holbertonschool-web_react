import React from 'react'
import { shallow } from 'enzyme';
import Login from './Login';


describe("Login component", () => {
    it('Login renders without crashing', () => {
        shallow(<Login />);
    });
    it('renders a div with the class App-body', () => {
        expect(shallow(<Login />).find('div.App-body').exists()).toEqual(true);
    });
    it('render input tag', () => {
        expect(shallow(<Login />).find('input').exists()).toEqual(true);
    });
    it('render label tag', () => {
        expect(shallow(<Login />).find('label').exists()).toEqual(true);
    });
});
