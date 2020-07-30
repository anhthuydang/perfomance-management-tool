import React from 'react';
import './Headings.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faThumbtack, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Headings = () => {
    return (
        <section className="headingWrapper">
            <h1>Performance Management</h1>
            <div className="subHeadingWrapper">
               <div className="subHeading">
                  <FontAwesomeIcon icon={faGlobe} size="2x" />
                  <h2>Diagnostic Tool</h2>
               </div>
               <button>
                  <FontAwesomeIcon icon={faThumbtack} />
               </button>
            </div>
         </section>
    )
}

export default Headings;