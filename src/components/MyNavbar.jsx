import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSearch } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MyNavbar = function () {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid className="m-0">
          <Navbar.Brand>
            <img src="./src/assets/logo.png" width={'100'} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/TvShows/Cars" className="nav-link">
                Tv Shows
              </Link>
              {/* <Nav.Link href="#link">TV Shows</Nav.Link> */}
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <BsSearch className="text-white" />
              <BsBell className="text-white ms-3" />
              <span className="text-white ms-3">KIDS</span>
              <BsPersonCircle className="text-white ms-3" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
