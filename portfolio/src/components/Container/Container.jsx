import React from 'react';
import Aside from '../Aside';
import Card from '../Cards';
import SocialMedias from '../SocialMedias';
import './Container.css';


export default function Container(){

    return (<div className= "content">

        <Aside/>
        <SocialMedias/>
        <Card/>
    </div>)
}