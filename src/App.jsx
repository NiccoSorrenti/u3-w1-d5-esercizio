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
      <MyGallery />
      <MyFooter />
    </>
  );
}

export default App;
