import React from 'react';
import './Card.css';

export default function Card(props) {

   
    return (<div className="card">
        <h1>{props.data.project_name}</h1>
        <div className="card__description">
        <p>{props.data.description}</p>
        </div>
        <div className="card__urls">
        <a href={props.data.github_url} target="_blank">{props.data.github_url}</a>
        <a href={props.data.deploy_url} target="_blank">{props.data.deploy_url}</a>
        </div>
        <h3>Requirements</h3>
        <ul className="card__list">
            {props.data.requirements.map(
                (requirement, index) => {

                    return <li>{requirement}</li>

                }

            )}
        </ul>
        <h3>Technologies</h3>
        <ul className="card__list">
            {props.data.technologies.map(
                (technology, index) => {
                    return <li>{technology}</li>
                }
            )}
        </ul>
        <p>{props.data.picture}</p>


    </div>)
}