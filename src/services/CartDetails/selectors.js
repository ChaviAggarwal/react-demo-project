// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
const selectCartDetailsContainer = state => state.containers.cartDetailsReducer;
const selectCartDetails = state => selectCartDetailsContainer(state).get('cartData');
const selectCartCount = state => selectCartDetailsContainer(state).get('cartCount');
const selectCartLoading = state => selectCartDetailsContainer(state).get('cartDetailsDataLoading');



export { selectCartDetailsContainer, selectCartDetails, selectCartCount,selectCartLoading };