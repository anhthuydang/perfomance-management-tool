import React from 'react';
import './Filters.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Filters = () => {
    return (
        <div className="filterWrapper">
            <h4>Filters</h4>
            <div className="filterTextContainer">
                <div className="infoFlex">
                    <div className="square"></div>
                    <p>All CQA Results</p>
                    <FontAwesomeIcon icon={faInfoCircle} />
                </div>
                <div className="infoFlex">
                    <div className="square"></div>
                    <p>CQAs with Closed Loop</p>
                    <FontAwesomeIcon icon={faInfoCircle} />
                </div>
            </div>
        </div>
    )
}

export default Filters;
