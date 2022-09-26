// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer";
// import Signup from "./Pages/SignUp"
import {  Route, Routes } from "react-router-dom";
import Pagenotfound from './Components/Pagenotfound';
import Signup from './Components/Signup';

function App() {
  return (
    
      <div className="App">
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Signup' element={<Signup/>} />

            {/* 404 Page*/}
            <Route path='*' element={<Pagenotfound/>} />
          </Routes>
        </div>
      </div>
  
  );
}

export default App;
