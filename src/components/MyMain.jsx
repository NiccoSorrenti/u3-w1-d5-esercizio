import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillGridFill } from 'react-icons/bs';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

const MyMain = function () {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container fluid className="m-0">
          <Navbar.Brand href="#home">TV Shows</Navbar.Brand>

          <Nav className="me-auto">
            <NavDropdown
              title="Genres"
              id="basic-nav-dropdown"
              className="border border-white"
              active
            >
              <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <BsFillGridFill className="text-white" />
            <BsFillGrid3X3GapFill className="text-white ms-3" />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyMain;
