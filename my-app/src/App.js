import './App.css';
import Footer from './components/Navbar/Footer';
import Navbar from "./components/Navbar/navbar";
import { MainRoute } from './Pages/MainRoute'; 

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#8dd15a"}}>
     <Navbar/>
     <MainRoute/>
     <Footer/>
    </div>
  );
}

export default App;
