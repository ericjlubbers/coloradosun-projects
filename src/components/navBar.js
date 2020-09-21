import React from "react"
import { Link } from "gatsby"

import { Navbar, Dropdown, Nav, Button } from "react-bootstrap"
import SiteLogo from "../images/sun-projects-logo.svg"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
    <Navbar variant="dark" expand="lg" id="site-navbar">
    {/* <Container> */}
    <Link to="http://coloradosun.com/" className="link-no-style">
    <Navbar.Brand as="span">
    <img src={SiteLogo} height="30" class="d-inline-block align-top" alt=""/>
    </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
    <Link to="/" className="link-no-style">
    <Nav.Link as="span" eventKey="index">
    All Projects
    </Nav.Link>
    </Link>
    <Link to="/money-tracker" className="link-no-style">
    <Nav.Link as="span" eventKey="money-tracker">
    Money Tracker
    </Nav.Link>
    </Link>
    <Dropdown>
    <Dropdown.Toggle variant="link" id="dropdown-basic" className="link-no-style">
    More Politics
    </Dropdown.Toggle>
    
    <Dropdown.Menu>
    <Dropdown.Item href="http://coloradosun.com/unaffiliated">Get The Unaffiliated newsletter</Dropdown.Item>
    <Dropdown.Item href="http://coloradosun.com/politics">More Politics News</Dropdown.Item>
    <Dropdown.Item href="http://twitter.com/PoliticsSun">@PoliticsSun on Twitter</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    
    {/* <Button href="http://coloradosun.com/newsletters" className="btn-secondary">Newsletter</Button> */}
    </Nav>
    <Nav className="ml-auto">
    <Button href="http://coloradosun.com/join" className="btn-danger">Become a Member</Button>
    </Nav>
    </Navbar.Collapse>
    {/* </Container> */}
    </Navbar>
    </>
    )
  }
  
  export default CustomNavbar
  