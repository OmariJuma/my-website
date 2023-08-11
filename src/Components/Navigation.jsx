import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar expand="lg" sticky='top' className=" bg-body-tertiary" style={{maxWidth:"100vw", borderRadius:30}} >
      <Container>
        <Navbar.Brand href="#home" id='brand'>Omar Juma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#skills">SKILLS</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#contact">CONTACT ME 📞</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;