import React from 'react';
import './TopBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPrint, faQuestionCircle, faArrowAltCircleRight, faServer } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    return (
        <nav className="topBar">
            <p>Diagnostic Tool</p>
            <div>
               <p>Logged in as General User |</p>
               <ul>
                  <li>
                     <button>
                     <FontAwesomeIcon icon={faServer} />
                     </button>
                  </li>
                  <li>
                     <button>
                     <FontAwesomeIcon icon={faDownload} />
                     </button>
                  </li>
                  <li>
                     <button>
                     <FontAwesomeIcon icon={faPrint} />
                     </button>
                  </li>
                  <li>
                     <button>
                     <FontAwesomeIcon icon={faQuestionCircle} />
                     </button>
                  </li>
                  <li>
                     <button>
                     <FontAwesomeIcon icon={faArrowAltCircleRight} />
                     </button>
                  </li>
               </ul>
            </div>
         </nav>
    )
}

export default TopBar;