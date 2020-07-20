import { fromJS } from 'immutable';

import { cartDetails } from './constants';

const initialState = fromJS({
  cartData: null,
  cartCount:null,
  cartDetailsDataLoading: null,
  cartDetailsDataLoaded: null,
  cartDetailsDataError: null
});

const cartDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartDetails.GET_CART_DETAILS:
      return state
        .set('cartDetailsDataLoading', true)
        .set('cartDetailsDataError', null);

    case cartDetails.GET_CART_DETAILS_LOADED:
      return state
        .set('cartCount', action.count)
        .set('cartData', action.data)
        .set('cartDetailsDataLoading', false)
        .set('cartDetailsDataLoaded', true)
        .set('cartDetailsDataError', null);

    case cartDetails.GET_CART_DETAILS_ERROR:
      return state
        .set('cartDetailsDataLoading', false)
        .set('cartDetailsDataLoaded', false)
        .set('cartDetailsDataError', action.error);

    default:
      return state;
  }
};

export default cartDetailsReducer;
