import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyMain = function () {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
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
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyMain;
