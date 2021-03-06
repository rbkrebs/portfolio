import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './Section.css'

import Brand from '../Brand';
import About from '../About'
import Projects from '../Projects'

export default function Section(){


    return (

        <div className="section">
        
        <Switch>
                <Route exact path="/" component={Brand} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
        </Switch>
        </div>
        
       
    )
}