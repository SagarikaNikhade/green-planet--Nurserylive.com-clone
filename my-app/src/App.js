import './App.css';
import Footer from './components/Navbar/Footer';
import Navbar from "./components/Navbar/navbar";
import { MainRoute } from './Pages/MainRoute';
// import image from "./components/img/BackgroundImg.png"; 

function App() {
  return (
    // <div className="App" backgroundColor:`#a5d38b` style={{ backgroundImage:`url(${image})` }}>
    <div className="App" style={{ backgroundColor: "#8dd15a"}}>
     <Navbar/>
     <MainRoute/>
     <Footer/>
    </div>
  );
}

export default App;
