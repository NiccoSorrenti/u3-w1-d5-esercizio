const SingleFIlm = function (props) {
  return (
    <img
      className="mx-2"
      width={'auto'}
      height={'300px'}
      src={props.film.Poster}
      alt={props.film.Title}
    />
  );
};

export default SingleFIlm;
