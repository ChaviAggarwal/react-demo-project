import React, { useState, useEffect } from 'react';
import './MyCart.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CartDetails from '../CartDetails/CartDetails';
// import OfferSummary from '../OfferSummary/OfferSummary'
import cartData from '../../utils/cartDetails.json'
import Accordion from 'react-bootstrap/Accordion';
import { getFilteredOffers } from '../../utils/commonMethods';


function MyCart(props) {

  const [createdDate, setCreatedDate] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [shouldDisplay, setDisplay] = useState(false);
  const [shouldIATADisplay, setIATADisplay] = useState(false);
  const [filterQuery, setQuery] = useState(false);
  const [hasError, setError] = useState(false);
  const [isRefreshed, setRefreshed] = useState(false);
  const [isRemoved, setRemoved] = useState(false);
  const [sortedLegalEntities, setLegalEntities] = useState(false);
  const [cartDetails, setInitialCartDetails] = useState('');
  const [selectedIATA, setIATA] = useState('');
  const [selectedAccount, setAccount] = useState('');
  const [activeCard, setActiveCard] = useState('');
  const [filteredOfffers, setFilteredOffers] = useState('');
  const savedOffers = cartData.data;

  //Uncomment below to fetch cart data from api
  // const savedOffers = props.savedOffersDetails;




  /****************************
   * *************************************
      * Function : 	 sortedLegalEntities()
      * Description : This function sorts offers on basis of Legal Entities
    *
      ******************************************************************/
  const sortLegalEntitiesDetails = (savedOffers) => {
    const legalEntities = savedOffers.slice().sort(function (a, b) {
      if (a.legalEntityName.toLowerCase() === b.legalEntityName.toLowerCase() && a.grn > b.grn) {
        return 1;
      } else if (a.legalEntityName.toLowerCase() > b.legalEntityName.toLowerCase()) {
        return 1;
      }
      else {
        return -1;
      }

    });
    setLegalEntities(legalEntities);
  }

  /*****************************************************************
     * Function : 	 sortedOffers()
     * Description : This function sorts offers on basis of Delivery Point
	 *
     ******************************************************************/
  const sortSavedOffers = (savedOffers) => {
    const sortedOffers = savedOffers.slice().sort(function (c, d) {
      if (c.locationId.toLowerCase() === d.locationId.toLowerCase()) {
        return 0;
      } else if (c.locationId.toLowerCase() > d.locationId.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }

    });
    setActiveCard(sortedOffers[0].offerId);
    setFilteredOffers(sortedOffers);
    setInitialCartDetails(sortedOffers);

  }


  // const defaultIATA = sortedOffers[0].locationId;



  useEffect(() => {

    //Uncomment below lines to fetch offers from api
    // if (savedOffers !== null) {
    //   sortLegalEntitiesDetails(savedOffers.data);
    //   sortSavedOffers(savedOffers.data);
    // }
    if (savedOffers !== null) {
      sortLegalEntitiesDetails(savedOffers);
      sortSavedOffers(savedOffers);
    }
  }, [props.savedOffersDetails]);





  /*****************************************************************
      * Function : 	 handleCreatedDateChange()
      * Description : This function sets changed created date
    *
      ******************************************************************/


  const handleCreatedDateChange = (date) => {
    setCreatedDate(date);
    filterCreatedDate(date);
  }


  /*****************************************************************
    * Function : 	 handleExpiryDateChange()
    * Description : This function sets changed expiry date
  *
    ******************************************************************/

  const handleExpiryDateChange = (date) => {
    setExpiryDate(date);
    filterExpiryDate(date);
  }


  /*****************************************************************
    * Function : 	 handleChangeAccount()
    * Description : This function sets active account value
  *
    ******************************************************************/

  const handleChangeAccount = (ev, val) => {
    setAccount(val);
    setDisplay(!shouldDisplay);
    filterAccount(ev.target.value);
  };

  const handleDefaultAccount = () => {
    setAccount('');
    setDisplay(!shouldDisplay);
    filterAccount(null);
  };
  /*****************************************************************
    * Function : 	 handleChangeIATA()
    * Description : This function sets active IATA value
  *
    ******************************************************************/


  const handleChangeIATA = (ev, val) => {
    setIATA(val);
    setIATADisplay(!shouldIATADisplay);
    filterIATA(val);
  };

  const handleDefaultIATA = () => {
    setIATA('');
    setIATADisplay(!shouldIATADisplay);
    filterIATA(null);
  };

  /*****************************************************************
    * Function : 	 toggleList()
    * Description : This function toggles account dropdown
  *
    ******************************************************************/


  const toggleList = (ev) => {
    setDisplay(!shouldDisplay);
  }

  /*****************************************************************
    * Function : 	 toggleIATAList()
    * Description : This function toggles IATA dropdown
  *
    ******************************************************************/


  const toggleIATAList = (ev) => {
    setIATADisplay(!shouldIATADisplay);
  }

  /*****************************************************************
    * Function : 	 toggleCardDetail()
    * Description : This function toggles card details
  *
    ******************************************************************/

  const toggleCardDetail = (cardId) => {
    setActiveCard(cardId === activeCard ? null : cardId);
    setRefreshed(false);
    setRemoved(false);
  }

  /*****************************************************************
    * Function : 	 filterAccount()
    * Description : This function sets query parameter for account filter
  *
    ******************************************************************/


  const filterAccount = (acnt) => {

    if (acnt !== null) {
      setQuery({ ...filterQuery, grn: acnt });

    }
    else {
      let rmGrn = { ...filterQuery };
      delete rmGrn.grn;

      setQuery(rmGrn);
    }

  }

  /*****************************************************************
    * Function : 	 filterIATA()
    * Description : This function sets query parameter for IATA filter
  *
    ******************************************************************/


  const filterIATA = (IATA) => {

    if (IATA !== null) {
      setQuery({ ...filterQuery, locationId: IATA });
    }
    else {
      let rmLocation = { ...filterQuery };
      delete rmLocation.locationId;
      setQuery(rmLocation);
    }
  }

  /*****************************************************************
    * Function : 	 filterCreatedDate()
    * Description : This function sets query parameter for Created Date filter
  *
    ******************************************************************/


  const filterCreatedDate = (date) => {

    if (date !== null) {
      setQuery({ ...filterQuery, createdAt: date });
    }
    else {
      let rmCreationDate = { ...filterQuery };
      delete rmCreationDate.createdAt;
      setQuery(rmCreationDate);
    }
  }

  /*****************************************************************
    * Function : 	 filterExpiryDate()
    * Description : This function sets query parameter for Created Date filter
  *
    ******************************************************************/


  const filterExpiryDate = (date) => {
    if (date !== null) {
      setQuery({ ...filterQuery, priceIndexValidTo: date });
    }
    else {
      let rmExpiryDate = { ...filterQuery };
      delete rmExpiryDate.priceIndexValidTo;
      setQuery(rmExpiryDate);
    }
  }



  /*****************************************************************
   * Function : 	 filterOfferDetails()
   * Description : This function filters offers on the basis of filter query
 *
   ******************************************************************/


  const filterOfferDetails = () => {

    const filterVal = getFilteredOffers(cartDetails, filterQuery);
    setFilteredOffers(filterVal);
    if (filterVal.length !== 0) {
      setActiveCard(filterVal[0].offerId);
      setError(false);
    }
    else {
      setActiveCard(null);
      setError(true);
    }
  }

  /*****************************************************************
    * Function : 	 clearAllFilters()
    * Description : This function clears appplied filters and returns original
    * list of offers
    ******************************************************************/


  const clearAllFilters = () => {
    setError(false);
    setQuery({});
    setCreatedDate(null);
    setExpiryDate(null);
    setAccount('');
    setIATA('');
    setFilteredOffers(cartDetails);
    setActiveCard(cartDetails[0].offerId);
  }



  return (
    <div className="my-cart">
      <h2 className="header">My Cart</h2>
      <hr className="custom-hr"></hr>
      <div><span className="btn-span">Filters for saved offers</span></div>
      <div className="container">
        <div>
          <label className="cart-text acnt-text" >
            <em className="bp-icon-people-one"></em> Select account</label>
          <br />
          <div className="drpdwn-container">
            <button type="text" className="adhoc-drpdown" title="Account" onBlur={(e) => { setDisplay(false) }} onClick={(e) => { toggleList(e) }}>{selectedAccount}</button>
            {shouldDisplay && <div class="custom-dropdown"> <ul>
              <li onMouseDown={handleDefaultAccount} className={selectedAccount === '' ? "option custom-account-option active" : "option custom-account-option"}> Select account </li>
              {sortedLegalEntities.map((offer, index) => {
                return <li
                  onMouseDown={(ev) => { handleChangeAccount(ev, ev.target.innerText) }}
                  className={selectedAccount.includes(offer.grn) ? "option custom-account-option active" : "option custom-account-option "}
                  value={offer.grn}
                  key={offer.grn}
                >{offer.legalEntityName} - {offer.grn}</li>
              })}
            </ul>
            </div>
            }
          </div>

          <em className="fa fa-chevron-down custom-icon" aria-hidden="true"></em>
        </div>
        <div>
          <label className="cart-text">
            <em className="bp-icon-map-pointer"></em> Select IATA  </label><br />
          <div className="drpdwn-container iata-container">
            <button type="text" className="adhoc-drpdown iata-btn" title="IATA" onBlur={(e) => { setIATADisplay(false) }} onClick={(e) => { toggleIATAList(e) }}>{selectedIATA}</button>
            {shouldIATADisplay && <div class="custom-dropdown"> <ul className="custom-iata-width">
              <li onMouseDown={handleDefaultIATA} className={selectedIATA === '' ? "option option custom-iata-width active" : "option option custom-iata-width"}><span className="clear-span">Select IATA</span></li>
              {cartDetails.map((offer, index) => {
                return <li
                  onMouseDown={(ev) => { handleChangeIATA(ev, ev.target.innerText) }}
                  className={selectedIATA === offer.locationId ? "option custom-iata-width active" : "option custom-iata-width"}
                  value={offer.locationId}
                  key={offer.locationId}
                >{offer.locationId}</li>
              })}
            </ul>
            </div>
            }
          </div>
          <em className="fa fa-chevron-down down-arrow" aria-hidden="true"></em>
        </div>
        <div className="align-date">
          <label className="cart-text custom-label">
            Created date from</label><br />
          <label className="custom-label"> <DatePicker
            selected={createdDate}
            onChange={handleCreatedDateChange}
          />
         
            <em className="bp-icon-calendar"></em>
          </label>
        </div>
        <div className="align-date">
          <label className="cart-text">
            Created date to</label><br />
          <label className="custom-label"> <DatePicker
            selected={expiryDate}
            onChange={handleExpiryDateChange}
          />
            <em className="bp-icon-calendar"></em>
          </label>
        </div>
        <div>
          <button className="clr-btn" onClick={clearAllFilters}><span className="clr-span">Clear filters</span></button>
          <br />
          <button className="search-btn" onClick={filterOfferDetails}>
            <span className="search-span">Search</span><i className="fa fa-search custom-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {hasError && <div className="location-modal__body-nc_location-warning warning-box-less warning-box-less--green auto-width error-box">
        <em className="fa fa-2x fa-exclamation-circle fa-exclamation-circle--double-line"></em>
        <span className="error-span">Sorry! the filters selected do not match the search results.
        </span>
      </div>}
      <div className="offer-details">
        <div className="details">
          <Accordion>
            {filteredOfffers &&
              filteredOfffers.map((item, index) => {
                return <CartDetails
                  key={item.offerId}
                  index={index + 1}
                  details={item}
                  onClick={toggleCardDetail}
                  activeCardId={activeCard}
                  refreshed={isRefreshed}
                  removed={isRemoved} />
              })
            }
          </Accordion>
        </div> {/* {!hasError && activeCard && <div className="divider"></div>}
        <div>
          {activeCard && <OfferSummary details={filteredOfffers} offerId={activeCard} onRefreshOffer={handleOfferChange} onRemoveOffer={handleRemovedOffer}></OfferSummary>}
        </div>
        */}
      </div>
    </div >
  );
}



export default MyCart;

