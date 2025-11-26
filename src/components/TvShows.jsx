import { Component, useEffect, useState } from 'react';
import { Container, Row, Col, ListGroupItem } from 'react-bootstrap';
import SingleFilm from './SingleFilm';
import { useParams } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';

const TvShows = function () {
  const [films, setFilms] = useState([]);

  const params = useParams();

  const getFilms = function () {
    const URL = 'http://www.omdbapi.com/?apikey=f69ecfa2&s=';
    const ID = params.saga;
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
        setFilms(arrayOfFilms.Search);
      })
      .catch((err) => {
        console.log('errore nella chiamata', err);
      });
  };

  //   componentDidMount() {
  //     console.log('sono componentDidMount');

  //     this.getFilms();
  //   }

  useEffect(() => {
    getFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MyNavbar />

      <Container className="vh-100">
        <Row className="g-3 mt-3 overflow-auto">
          <Col
            bg="dark"
            data-bs-theme="dark"
            className="mt-3 overflow-auto d-flex "
          >
            {films.map((film) => {
              return <SingleFilm key={film.imdbID} film={film} />;
            })}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default TvShows;
