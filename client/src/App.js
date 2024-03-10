import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CityState from './context/cities/CityState.js';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
        <CityState>
        <Router>
        <Navbar/>
            <Routes>
              <Route exact path="/" element={ <Home />}/>
               <Route exact path="/login" element={ <Login/>}/> 
              <Route exact path="/signup" element={ <Signup />}/>
            </Routes>
        </Router>
        </CityState>
    </>
  );
}

export default App;
