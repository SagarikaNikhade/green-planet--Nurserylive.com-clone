import './App.css';
import Footer from './components/Navbar/Footer';
import Navbar from "./components/Navbar/navbar";
import { MainRoute } from './Pages/MainRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from './Redux/AuthReducer/action';

function App() {
  const dispatch = useDispatch();

  // Initialize auth state from localStorage
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // Log environment info in development
  if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_ENABLE_DEBUG === 'true') {
    console.log('🌱 Green Planet App Starting...');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('API URL:', process.env.REACT_APP_API_URL);
    console.log('App Name:', process.env.REACT_APP_APP_NAME);
  }

          return (
            <div className="App" style={{ backgroundColor: "white"}}>
             <Navbar/>
             <MainRoute/>
             <Footer/>
            </div>
          );
}

export default App;
