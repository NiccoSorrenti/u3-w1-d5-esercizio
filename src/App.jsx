import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyMain from './components/MyMain';
import MyGallery from './components/MyGallery';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <MyNavbar />
      <MyMain />
      <h4 className="text-white mt-4 mb-2 mx-2">Trending Now</h4>
      <MyGallery film={'Star Wars'} />

      <h4 className="text-white mt-4 mb-2 mx-2">Watch it Again</h4>
      <MyGallery film={'Superman'} />

      <h4 className="text-white mt-4 mb-2 mx-2">New Releases</h4>
      <MyGallery film={'Cars'} />
      <MyFooter />
    </>
  );
}

export default App;
