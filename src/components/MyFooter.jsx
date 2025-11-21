import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitterX } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const MyFooter = function () {
  return (
    <>
      <Container className="mt-5">
        <Row className="mb-3">
          <Col>
            <BsFacebook className="text-secondary" />
            <BsInstagram className="text-secondary ms-3" />
            <BsTwitterX className="text-secondary ms-3" />
            <BsYoutube className="text-secondary ms-3" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={3}>
            <p className="text-secondary">Audio and Subtitles</p>
            <p className="text-secondary">Media Center</p>
            <p className="text-secondary">Privacy</p>
            <p className="text-secondary">Contact us</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <p className="text-secondary">Audio Description</p>
            <p className="text-secondary">Investor Relations</p>
            <p className="text-secondary">Legal Notices</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <p className="text-secondary">Help Center</p>
            <p className="text-secondary">Jobs</p>
            <p className="text-secondary">Cookie Preferences</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <p className="text-secondary">Gift Cards</p>
            <p className="text-secondary">Terms of Use</p>
            <p className="text-secondary">Corporate Information</p>
          </Col>
        </Row>
        <Row>
          <button
            style={{ width: '11%' }}
            className="text-secondary bg-dark border border-secondary d-flex"
          >
            Service Code
          </button>
        </Row>
        <Row className="mt-3">
          <p className="text-secondary fs-6">&copy; 1997-2023 Netflix, Inc.</p>
        </Row>
      </Container>
    </>
  );
};

export default MyFooter;
