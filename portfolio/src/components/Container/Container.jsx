import React from 'react';
import Card from '../Cards/Card';
import Aside from '../Aside';
import Section from '../Section';
import SocialMedia from '../SocialMedias/SocialMedias'

import './Container.css';


export default function Container(){

    return (<div className= "content">

      <Aside/>
      <Section/> 
       
    </div>)
}