import { Navbar, Container, Nav, } from "react-bootstrap";
import { BoxArrowInRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from '../../logo_transparent.png';


function NavElements() {

    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/"><img src={logo} alt="Journery Platform" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/things-to-do" className="nav-link">Things to do</Link>
                        <Link to="/places-to-stay" className="nav-link">Places to stay</Link>
                        <Link to="/get-to-know-the-county" className="nav-link">Get to know the county</Link>
                        <Link to="/suitcase" className="nav-link link-w-icon"><BoxArrowInRight />Suitcase</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavElements;