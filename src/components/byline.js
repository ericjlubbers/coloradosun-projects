import React from "react"
import { Alert, Container, Row, Col, Media } from "react-bootstrap"


export default ({ children }) => (
    <Container fluid>
    <Row>
    <Col className="no-gutters">
    <Media>
    <img
    width={32}
    height={32}
    className="mr-2 authorMug"
    src="http://placehold.it/32x32"
    alt="Generic placeholder"
    />
    <Media.Body>
    <p className="bylineLabel">Reporter</p>
    <p className="bylineName">Eric Lubbers</p>
        <p className="bylineInfo">eric@coloradosun.com | @brofax</p>
        
    </Media.Body>
    </Media>
    </Col>
    </Row>
    </Container>
    )