import { Container, Row, Col } from 'react-bootstrap';

const MyGallery = function () {
  return (
    <>
      <Container bg="dark" data-bs-theme="dark" className="mt-3">
        <Row>
          <h4>Trending Now</h4>
          <Col xs={12} md={6} lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default MyGallery;
