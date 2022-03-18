import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Containers/home/home';
import Header from './Components/header';
import NavBar from './Components/navbar';
import Footer from './Components/footer';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
