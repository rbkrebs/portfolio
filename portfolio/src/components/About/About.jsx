import React from 'react';
import './About.css';


export default function About(){


    return(<div>

            <img className= "perfil" alt="foto perfil" src={perfil}/>
                        <div  className="info_perfil">
                        <p>
                            Hi, I'm Romulo Krebs, 
                            <a href="http://www.ufrgs.br/english/home" 
                            target="_blanck"> Chemical Engineering </a> 
                            and Laboratorian Technician at 
                            <a href= "https://www.gov.br/agricultura/pt-br/assuntos/laboratorios/lfda" 
                            target='_blank'> Government Lab </a> 
                            Since 2015 I've been studying and creating my own 
                            <a href="https://github.com/rbkrebs" target="_blanck"> projects </a> and helping
                            my supervisors taking better decisions about new software fetures or everything 
                            about IT needs.
                            </p>
                            <p>
                                My short period of homeoffice in 2020 showed me how many benefits I can earn
                                taking in account life quality. So, this is why I am building and showing you my
                                portfolio. I hope you enjoy!!
                            </p>
                            </div>
    </div>)
}