import React from 'react';
import { Link } from 'react-router-dom'

import './Menu.css';


export default function Menu(){

    return (<div className= "menu">

      <nav>
          <ul>
              <Link to="/about" className="menu__item">
                 <li> About </li>
              </Link>
              <Link to="/projects" className="menu__item">
              <li> Projects </li>
            </Link>
          </ul>
      </nav>
    </div>)
}