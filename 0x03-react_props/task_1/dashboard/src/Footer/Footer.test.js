import React from 'react'
import { shallow } from 'enzyme';
import Footer from './Footer';


describe("Footer component", () => {
    it('Footer renders without crashing', () => {
        shallow(<Footer />);
    });
    it('renders a div with the class App-footer', () => {
        expect(shallow(<Footer />).find('div.App-footer').exists()).toEqual(true);
    });
    it('renders a div with the class App-footer', () => {
        expect(shallow(<Footer />).contains('Copyright'));
    });
});
