import React from 'react';
import './Card.css';

export default function Card(props) {

    console.log(props.data)

    return (<div className="card">
        <p>{props.data.project_name}</p>
        <p>{props.data.description}</p>
        <p>{props.data.github_url}</p>
        <p>{props.data.deploy_url}</p>
        <ul>
            {props.data.requirements.map(
                (requirement, index) => {

                    return <li>{requirement}</li>

                }

            )}
        </ul>
        <ul>
            {props.data.technologies.map(
                (technology, index) => {

                    return <li>{technology}</li>

                }

            )}
        </ul>
        <p>{props.data.picture}</p>


    </div>)
}