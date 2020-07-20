import { takeLatest, call, put} from 'redux-saga/effects';
import { getCartDetailsLoaded, getCartDetailsError } from './actions';
import { cartDetails } from './constants';
import cartData from '../../utils/cartDetails.json';
import * as api from '../../utils/request';



/**
 * 
 * @param {*} page 
 */
function* getCartDetails() {
  const { result, error } = yield call(api.fetchData, `${cartDetails.CART_DETAILS_URL}`, { method: 'get' });

  if (error) {
    yield put(getCartDetailsError(error));
  }
  console.log("Cart data is", cartData)

  yield put(getCartDetailsLoaded(result));
}


/**
 * 
 */
function* cartDetailsSaga() {
  yield takeLatest(cartDetails.GET_CART_DETAILS, getCartDetails);
}

export {
  cartDetailsSaga, getCartDetails
};
