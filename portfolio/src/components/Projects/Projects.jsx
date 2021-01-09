import React from 'react'

import Card from '../Cards/Card'
import data from '../../DataMock.json'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './Projects.css'

export default function Projects() {

    return (
        <div className="project">
           
                {data.projects.map(

                    (project, index) => {

                        return <Card key={index} data={project} />

                    }
                )
            }           
        </div>
    )
}