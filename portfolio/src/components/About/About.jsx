import React from 'react';

import perfil from '../../assets/perfil.jpg';
import './About.css';


export default function About(){


    return(<div className="about">

            <img className= "perfil" alt="foto perfil" src={perfil}/>
                        <div  className="info_perfil">
                        <p>
                            Hi, I'm Romulo Krebs, 
                            <a href="http://www.ufrgs.br/english/home" 
                            target="_blanck"> Chemical Engineering </a> 
                            and Laboratorian Technician at 
                            <a href= "https://www.gov.br/agricultura/pt-br/assuntos/laboratorios/lfda" 
                            target='_blank'> Laboratory of Animal and Plant Health and Inspection. </a> 
                            Since 2015 I've been studying and creating my own 
                            <a href="https://github.com/rbkrebs" target="_blanck"> projects </a> and helping
                            my supervisors taking better decisions about new software features or everything 
                            about IT needs.
                            </p>
                            <p>
                                My short period working from home in 2020 showed me how many benefits I can have
                                taking in account life quality. So, this is why I am building and showing you my
                                portfolio. I hope you enjoy!!!
                            </p>
                            </div>
    </div>)
}