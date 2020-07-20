import { cartDetails } from './constants';

const getCartDetails = () => ({
  type: cartDetails.GET_CART_DETAILS,
});

const getCartDetailsLoaded = data => ({
  type: cartDetails.GET_CART_DETAILS_LOADED,
  data
});

const getCartDetailsError = error => ({
  type: cartDetails.GET_CART_DETAILS_ERROR,
  error
});


export {
  getCartDetails, getCartDetailsLoaded, getCartDetailsError
};