import React from 'react';
import WWImage from '../image/weather-wear-screenshot-1.png'
import PhoImage from '../image/photastic.PNG'
import CQImage from '../image/Quiz_Picture.PNG'
import EZImage from '../image/ezportal.PNG'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../Style/style.css'


function Projects() {
    return (
        <>
            <Row>
                <Col xs={12} sm={6} md={6}>
                    <a className = "mx-auto" href="https://lionhatt.github.io/project-WeatherWear/">WeatherWear</a>
                    <img src={WWImage} alt="WWscreenshot" className="weatherwear"></img>
                    <a className="mx-auto" href="https://github.com/lionhatt/project-WeatherWear">Github Repository</a>
                </Col>

                <Col xs={12} sm={6} md={6}>
                    <a className="mx-auto" href="https://github.com/deezyxp/PhoTastic/">PhoTastic</a>
                    <img src={WDImage} alt="PhoImage" className="photastic"></img>
                    <a className="mx-auto" href="https://github.com/deezyxp/PhoTastic">Github Repository</a>
                </Col>

                <Col xs={12} sm={6} md={6}>
                    <a className="mx-auto" href="https://deezyxp.github.io/Code_Quiz.io/">Code Quiz</a>
                    <img src={CQImage} alt="CQscreenshot" className="codequiz"></img>
                    <a className="mx-auto" href="https://github.com/deezyxp/Code_Quiz.io">Github Repository</a>
                </Col>

                <Col xs={12} sm={6} md={6}>
                    <a className="mx-auto" href="https://github.com/Skoggy/EZ-Portal">EZ Portal</a>
                    <img src={EZImage} alt="EZscreenshot" className="ezportal"></img>
                    <a className="mx-auto" href="https://github.com/Skoggy/EZ-Portal">Github Repository</a>
                </Col>
            </Row>
        </>
    )
}

export default Projects
