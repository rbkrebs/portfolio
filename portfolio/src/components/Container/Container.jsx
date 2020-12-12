import React from 'react';
import Aside from '../Aside/Aside';
import Card from '../Cards/Card';
import Footer from '../Footer';
import Section from '../Section';
import SocialMedia from '../SocialMedias/SocialMedias'

import './Container.css';


export default function Container(){

    return (<div className= "content">

      <Aside/>      
      <Section/>     
    </div>)
}