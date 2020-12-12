import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin }  from '@fortawesome/free-brands-svg-icons'
import { faGithub }  from '@fortawesome/free-brands-svg-icons'


import  './SocialMedias.css';



export default function SocialMedias(){

    return (<div className="social_medias">

        <a href="https://www.linkedin.com/in/romulo-krebs/" target="_blanck"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/rbkrebs" target="_blanck"><FontAwesomeIcon icon={faGithub} /></a>

    </div>)
}