import { Component } from 'react';
import { Container, Row, Col, ListGroupItem } from 'react-bootstrap';

class MyGallery extends Component {
  state = {
    films: [],
  };

  getFilms = function () {
    const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f69ecfa2';
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('la chiamata non è ok: ' + response.status);
        }
      })
      .then((arrayOfFilms) => {
        console.log('Film a DB', arrayOfFilms);
        this.setState({
          films: arrayOfFilms,
        });
      })
      .catch((err) => {
        console.log('errore nella chiamata', err);
      });
  };

  componentDidMount() {
    console.log('sono componentDidMount');

    this.getFilms();
  }

  render() {
    return (
      <>
        <Container bg="dark" data-bs-theme="dark" className="mt-3">
          <Row className="g-3">
            <h4 className="text-white">Trending Now</h4>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/1.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/2.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/3.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/4.png" alt="" />
            </Col>
          </Row>
          <Row className="g-3 mt-3">
            <h4 className="text-white">Watch it Again</h4>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/5.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/6.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/7.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/8.png" alt="" />
            </Col>
          </Row>
          <Row className="g-3 mt-3">
            <h4 className="text-white">New Releases</h4>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/9.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/10.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/11.png" alt="" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <img src="./src/assets/12.png" alt="" />
            </Col>
          </Row>
          <Row className="g-3 mt-3">
            {/* {this.state.films.map((film) => {
              return <Col>{film.Title}</Col>;
            })} */}
          </Row>
        </Container>
      </>
    );
  }
}

export default MyGallery;
