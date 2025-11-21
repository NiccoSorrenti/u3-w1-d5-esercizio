import { Component } from 'react';
import { Container, Row, Col, ListGroupItem } from 'react-bootstrap';
import SingleFilm from './SingleFilm';

class MyGallery extends Component {
  state = {
    films: [],
  };

  getFilms = function () {
    const URL = 'http://www.omdbapi.com/?apikey=f69ecfa2&s=';
    const ID = this.props.film;
    fetch(URL + ID)
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
          films: arrayOfFilms.Search,
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
        <Row className="g-3 mt-3 overflow-auto">
          <Container
            bg="dark"
            data-bs-theme="dark"
            className="mt-3 overflow-auto d-flex"
          >
            {this.state.films.map((film) => {
              return <SingleFilm key={film.imdbID} film={film} />;
            })}
          </Container>
        </Row>
      </>
    );
  }
}

export default MyGallery;
