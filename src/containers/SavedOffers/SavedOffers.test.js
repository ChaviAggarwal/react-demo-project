import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '../../state-management/store';
import SavedOffers from '../../containers/SavedOffers/SavedOffers';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('SavedOffers', () => {
    const getWrapper = () => mount(
        <Provider store={store}>
            <BrowserRouter>
            <SavedOffers />
            </BrowserRouter>          
        </Provider>);
    it('renders', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);

    });

});