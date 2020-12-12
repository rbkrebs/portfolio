import React from 'react';
import Aside from '../Aside/Aside';
import Card from '../Cards/Card';
import SocialMedia from '../SocialMedias/SocialMedias'

import './Container.css';


export default function Container(){

    return (<div className= "content">

      <Aside/>
      <Card/>
      <div>&lt;rbkrebs!&gt;</div>
      <SocialMedia/>
    </div>)
}