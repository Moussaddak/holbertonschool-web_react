import React from 'react'
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header component", () => {
    it('Header renders without crashing', () => {
        shallow(<Header />);
    });
    it('renders a div with the class App-header', () => {
        expect(shallow(<Header />).find('div.App-header').exists()).toEqual(true);
    });
    it('render h1 tag', () => {
        expect(shallow(<Header />).find('h1').exists()).toEqual(true);
    });
    it('render img tag', () => {
        expect(shallow(<Header />).find('img').exists()).toEqual(true);
    });
});
