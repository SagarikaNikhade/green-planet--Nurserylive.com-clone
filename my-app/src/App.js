import './App.css';
import Footer from './components/Navbar/Footer';
import Navbar from "./components/Navbar/navbar";
import { MainRoute } from './Pages/MainRoute';
// import image from "./components/img/BackgroundImg.png"; 

function App() {
  return (
    // <div className="App" style={{ backgroundImage:`url(${image})` }}>
    <div className="App" style={{ backgroundColor:`#a5d38b` }}>
     <Navbar/>
     <MainRoute/>
     <Footer/>
    </div>
  );
}

export default App;
