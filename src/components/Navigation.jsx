import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container>
        <LinkContainer to="">
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ margin: "auto" }}>
            <LinkContainer to="">
              <Nav.Link to="">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Academics" id="collapsible-nav-dropdown">
              <LinkContainer to="academics/academic-calender">
                <NavDropdown.Item>Academic Calender</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="academics/result">
                <NavDropdown.Item>Result</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="academics/syllabus">
                <NavDropdown.Item>Syllabus</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="academics/timetable">
                <NavDropdown.Item>Timetable</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="academics/admission-fee">
                <NavDropdown.Item>Admission Fee</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="teacher">
              <Nav.Link>Teacher</Nav.Link>
            </LinkContainer>
            <LinkContainer to="gallery">
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Button variant="outline-success" style={{ margin: "5px 0" }}>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
