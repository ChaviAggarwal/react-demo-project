import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '../../state-management/store';
import CartDetails from '../../components/CartDetails/CartDetails';
import { BrowserRouter } from 'react-router-dom';
import * as COMMON from "../../utils/commonMethods"

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('CartDetails', () => {
    const props = {
        offerId: 7,
        onClick: jest.fn(),
        key: 7,
        index: 1,
        activeCardId: 7,
        details: [
            {
                "offerId": 7,
                "locationId": "ABZ01",
                "airportName": "BDU Airport",
                "deliveryPoint": "ABZ03",
                "deliveryPointName": "Signature Ramp",
                "priceIndexValidTo": "2020-02-11T06:44:03.986Z",
                "priceIndexName": "ABC Platts Monday",
                "pricePlatts": 124.456,
                "pricingDifferential": 256,
                "pricingDifferentialCurrency": "USX",
                "pricingDifferentialMeasure": "USG",
                "mandTotalTax": 0,
                "totalUnitCost": 380.456,
                "totalUplift": 0,
                "adhocOfferId": "AH24-ABZ-20200211-senqmo-1234",
                "legalEntityId": "34003",
                "legalEntityName": "Air France",
                "grn": "3400300",
                "userId": "senqmo",
                "status": null,
                "createdAt": "2020-05-07T14:57:36.211Z",
                "updatedAt": "2020-05-27T08:44:48.048Z"
            },
        ],
    }
    COMMON.isExpired = jest.fn(() => { return true; });
    const getWrapper = () => mount(
        <Provider store={store}>
            <BrowserRouter>
                <CartDetails {...props} />
            </BrowserRouter>
        </Provider>);
    it('renders', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);

    });
    it('renders', () => {
        const wrapper = getWrapper();
        const header = wrapper.find('.card-header');
        header.simulate('select', { e: { preventDefault: () => { } } });
    });

});