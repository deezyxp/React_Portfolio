import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Contact() {
    return (
    <Container>
      <Row>
        <Col>
          <h1>Contact</h1>
            <label className="contact-label name-label" htmlFor="name"> Name:</label><br />
            <input className="contact-input name-input" type="text" name="name" /><br />

            <label className="contact-label email-label" htmlFor="mail">E-mail:</label><br />
            <input className="contact-input email-input" type="text" name="mail" /><br />

            <label className="contact-label comment-label" htmlFor="comment">Comment:</label><br />
            <textarea className="comment-input" name="comment" id="contact-textarea" rows="6"></textarea>

            <br /><br />

            <input className="btn contact-button submit-button" type="submit" value="Send" />
            <input className="btn contact-button reset-button" type="reset" value="Reset" />
            </Col>
        </Row>
    </Container>
    )
}

export default Contact
