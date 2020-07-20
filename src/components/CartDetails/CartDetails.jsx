import React, { useEffect } from 'react';
import './CartDetails.scss';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import {
    setRefuellingDate,
    isExpired

} from '../../utils/commonMethods';


function CartDetails(props) {

    useEffect(() => {

    }, [props.details, props.activeCardId, props.refreshed, props.removed]);


    /**
     * 
     * @param {event} e
     * used for show and hide the header details, when Card is collapse. 
     */
    const toggleClicked = (e, cardId) => {
        e.preventDefault();
        props.onClick(cardId);
    }

    const isOpen = props.details.offerId === props.activeCardId;

    return (
        <div>
            <div className="cart-details">
                <Card className="custom-card">
                    {/* Header section start */}
                    <Accordion.Toggle as={Card.Header} onClick={(e) => toggleClicked(e, props.details.offerId)} onSelect={(e) => toggleClicked(e, props.details.offerId)} eventKey={props.details.offerId} className={isOpen ? 'custom-background custom-header' : 'custom-header'}>
                        <div><span className="location-id">{props.index}. {props.details.locationId}</span>
                            {isExpired(props.details.priceIndexValidTo) && <span className="index-price"> (Index price has changed)</span>}
                        </div>
                        <a className="custom-arrow">
                            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                        </a>
                    </Accordion.Toggle>
                    {/* Header section end */}
                    <Card.Body className='card-body-style'>
                        {/* card header with some details, when card is not active mode */}
                        <div className={isOpen ? 'custom-background' : 'd-none'} >
                            <div className="align-cart-content">
                                <div>
                                    <p className="loc-text">
                                        <strong>Delivery point:</strong> {props.details.deliveryPointName}<br />
                                        {props.details.legalEntityName} - {props.details.grn}
                                    </p>
                                </div>
                                <div>
                                    <p className="loc-text">
                                        <strong>Created date:</strong> {setRefuellingDate(props.details.createdAt)}<br />
                                        <strong>Index valid till:</strong> {setRefuellingDate(props.details.priceIndexValidTo)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* when card is active then card header with card body details show*/}

                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CartDetails;
