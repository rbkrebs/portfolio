import React from 'react'

import Card from '../Cards/Card'
import data from '../../DataMock.json'

import './Projects.css'

export default function Projects(){

    return(
        <div className = "project">
            {data.projects.map(

                (project, index) => {
                    
                    return  <Card key = {index} data={project}/>

                }
            )
                
            }

        
        </div>
    )
}