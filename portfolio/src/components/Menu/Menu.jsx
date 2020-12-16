import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard , faProjectDiagram} from '@fortawesome/free-solid-svg-icons'


import './Menu.css';


export default function Menu(){

    return (<div className= "menu">

      <nav>
          <ul>
          <Link to="/" className="menu__item">
          <FontAwesomeIcon className="menu__icon" icon={faHome} />
                 <li className="menu__text"> Home </li>
              </Link>
              <Link to="/about" className="menu__item">
              <FontAwesomeIcon className="menu__icon" icon={faAddressCard} />
                 <li className="menu__text"> About </li>
              </Link>
              <Link to="/projects" className="menu__item">
              <FontAwesomeIcon className="menu__icon" icon={faProjectDiagram} />
              <li className="menu__text"> Projects </li>
            </Link>
          </ul>
      </nav>
    </div>)
}