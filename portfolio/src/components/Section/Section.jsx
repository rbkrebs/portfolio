import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './Section.css'

import Brand from '../Brand';
import About from '../About'

export default function Section(){


    return (

        
        <Switch>
                <Route exact path="/" component={Brand} />
                <Route path="/about" component={About} />
        </Switch>
        
       
    )
}