import React from 'react';
import './SideBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faChartBar, faMailBulk, faShapes, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <nav className="sideBar">
        <ul>
        <li>
           <button>
           <FontAwesomeIcon icon={faThumbtack} />
           </button>
        </li>
        <li>
           <button>
           <FontAwesomeIcon icon={faChartBar} />
           </button>
        </li>
        <li>
           <button>
           <FontAwesomeIcon icon={faMailBulk} />
           </button>
        </li>
        <li>
           <button>
           <FontAwesomeIcon icon={faShapes} />
           </button>
        </li>
        <li>
           <button>
           <FontAwesomeIcon icon={faFileAlt} />
           </button>
        </li>
        </ul>
     </nav>
    )
}

export default SideBar;