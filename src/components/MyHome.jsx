import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar';
import MyMain from './MyMain';
import MyGallery from './MyGallery';
import MyFooter from './MyFooter';

function MyHome() {
  return (
    <>
      <MyNavbar />
      <MyMain />
      <h4 className="text-white mt-4 mb-2 mx-2">Trending Now</h4>
      <MyGallery film={'Star Wars'} />

      <h4 className="text-white mt-4 mb-2 mx-2">Watch it Again</h4>
      <MyGallery film={'Harry Potter'} />

      <h4 className="text-white mt-4 mb-2 mx-2">New Releases</h4>
      <MyGallery film={'Marvel'} />
      <MyFooter />
    </>
  );
}

export default MyHome;
