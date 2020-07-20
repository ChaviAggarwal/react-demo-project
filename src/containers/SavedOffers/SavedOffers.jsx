import React, { useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { getCartDetails } from '../../services/CartDetails/actions';
import { selectCartDetails } from '../../services/CartDetails/selectors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyCart from '../../components/MyCart/MyCart';



function SavedOffers(props) {


  useEffect(() => {

    props.actions.getCartDetails();

  },[props.offerDetails]);



  return (
    <div>
      <MyCart savedOffersDetails={props.offerDetails}></MyCart>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    offerDetails: selectCartDetails(state),
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getCartDetails }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(SavedOffers);

