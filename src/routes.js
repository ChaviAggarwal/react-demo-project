import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './state-management/store';
import { selectCartLoading } from './services/CartDetails/selectors';
import { connect } from 'react-redux';
import SavedOffers  from './containers/SavedOffers/SavedOffers'

function Routes(props)
{

  const isCartDetailsLoading = props.isCartLoading;
  const [showLoaderSpinner, showSpinner] = useState(false);


    useEffect(() => {
       isCartDetailsLoading  ? showSpinner(true) : showSpinner(false);
    },[isCartDetailsLoading]);

  return(
    <ConnectedRouter history={history}>
        {showLoaderSpinner && <div className="overlay-header">
                <div id="loading-img"></div>
            </div>}
    <div className="view-container" className={`${showLoaderSpinner ? "blurred-all" : ""}`}>
                {showLoaderSpinner && <div className="overlay-body">
                </div>}
       
        <Switch> 
          <Route exact path="/" component={SavedOffers} /> 
          <Route render={() => <Redirect to="/" />} />
        </Switch>
    </div>`
    </ConnectedRouter>

  )
}
const mapStateToProps = state => {
  return {  
    isCartLoading:selectCartLoading(state),
    
  }
};
export default connect(mapStateToProps)(Routes);
