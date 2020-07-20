import React from 'react';
import { Provider } from 'react-redux';
import store from '../../state-management/store';
import MyCart from '../../components/MyCart/MyCart';
import { BrowserRouter } from 'react-router-dom';
import * as COMMON from "../../utils/commonMethods";
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });



describe('MyCart', () => {
    const props = {
        savedOffersDetails:
        {
            data: [
                {
                    "offerId": 8,
                    "locationId": "ABZ01",
                    "airportName": "BDU Airport",
                    "deliveryPoint": "CBZ02",
                    "deliveryPointName": "Signature Ramp",
                    "priceIndexValidTo": "2020-06-30T06:44:03.986",
                    "priceIndexName": "ABC Platts Monday",
                    "pricePlatts": 124.456,
                    "pricingDifferential": 256,
                    "pricingDifferentialCurrency": "USX",
                    "pricingDifferentialMeasure": "USG",
                    "mandTotalTax": 120,
                    "totalUnitCost": 380.456,
                    "totalUplift": 0,
                    "adhocOfferId": "AH24-ABZ-20200211-senqmo-1234",
                    "legalEntityId": "34003",
                    "legalEntityName": "Air France",
                    "grn": "3400302",
                    "userId": "senqmo",
                    "status": null,
                    "createdAt": "2020-05-08T14:57:36.211Z",
                    "updatedAt": "2020-05-27T08:44:48.048Z"
                },
                {
                    "offerId": 23,
                    "locationId": "BDU03",
                    "airportName": "BDU Airport",
                    "deliveryPoint": "cBZ01",
                    "deliveryPointName": "Signature Ramp",
                    "priceIndexValidTo": "2020-02-11T06:44:03.986Z",
                    "priceIndexName": "ABC Platts Tuesday",
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
                    "grn": "3400301",
                    "userId": "senqmo",
                    "status": null,
                    "createdAt": "2020-05-07T14:57:38.021Z",
                    "updatedAt": "2020-05-27T08:45:05.526Z"
                }
            ]
        }
    }
    COMMON.getFilteredOffers = jest.fn(() => { return true; });
    const getWrapper = () => mount(
        <Provider store={store}>
            <BrowserRouter>
                <MyCart  {...props} />
            </BrowserRouter>
        </Provider>);
    it('should select last rolled number from state', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);

    });
   

    it('IATA Change', () => {
        const wrapper = getWrapper();
        const iataButton = wrapper.find({ 'title': 'IATA' });
        // iataButton.simulate('blur');
        iataButton.simulate('click');      
        const iataChangeDef=wrapper.find('.custom-iata-width').at(1);
        iataChangeDef.simulate('mousedown');
        iataButton.simulate('click');
        const iataChange=wrapper.find('.custom-iata-width').at(2);
        iataChange.simulate('mousedown');
        
    });
    it('Date Change', () => {
        const wrapper = getWrapper();
        const date1 = wrapper.find('.custom-label').at(1).childAt(1);
        date1.simulate('change');
        date1.simulate('select');
        const date2 = wrapper.find('.custom-label').at(2).childAt(1);
        date2.simulate('change');
        date2.simulate('select');
        // accountButton.simulate('change');
    });

    
    it('clearButton', () => {
        const wrapper = getWrapper();
        const clearButton = wrapper.find('button').at(2);
        clearButton.simulate('click');

    });


});