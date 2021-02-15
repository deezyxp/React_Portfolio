import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import displayPic from '../image/suitpic.jpg'
import '../../Style/style.css'

function Home() {
    return (
        <>

    <Container>
        <Row>
            <Col>
            <img src={displayPic} className = "suitpic" alt="suitpic"></img>
            </Col>
        </Row>
        <Row>
            <a class="links mx-auto" href="http://instagram.com/dzhangers">Instagram</a>
            <a class="links mx-auto" href="https://www.linkedin.com/in/daniel-zhang-b4518197/">LinkedIn</a>
            <a class="links mx-auto" href="assets/resume/myResume.pdf">Resume</a>
            <a class="links mx-auto" href="https://github.com/deezyxp/">Github</a>
        </Row>

        <Row className="brand-statement">
            <p>
            Full Stack Web Developer with a previous background in Commerce. I have a Bachelor’s Degree from the University of Melbourne majoring in Accounting and Finance and have also recently completed a Certificate in Full Stack Developing at Monash University. Over the years I have accrued experience in Tax consulting and also participated in a Vacationer’s program at a Big Four Accounting firm in Assurance and Advisory. I have developed proficiency in HTML, CSS and Javascript and also am proficient in the latest frameworks such as React.js. My goal over the coming years is to combine my existing financial experience and delve into web developing and see where it takes me. I have a passion for creativity and am very open to change, which is why, dynamically speaking, I believe that this career path will allow me to fully excel. 
            </p>
        </Row>

    </Container>


        </>
    )
}

export default Home
