import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyMain from './components/MyMain';
import MyGallery from './components/MyGallery';
import MyFooter from './components/MyFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TvShows from './components/TvShows';
import MyHome from './components/MyHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/TvShows/:saga" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
