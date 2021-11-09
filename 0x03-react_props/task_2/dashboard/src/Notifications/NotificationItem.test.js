import React from 'react'
import {shallow} from 'enzyme';
import NotificationItem from './NotificationItem';

const wrapper = shallow(
    <NotificationItem
    type="default"
    value="test"/>
);
describe("Notifications component", () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem type="default"/>);
    });
    it('renders the correct html', () => {
        const wrapper = shallow(<NotificationItem
            html={{__html: '<u>test</u>'}}/>);
        expect(wrapper.html()).toBe("<li><u>test</u></li>");
    });
});
