// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
// import Signup from "./Pages/SignUp"
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            {/* <Route path='/SignUp' element={<Signup/>} /> */}
            {/* <Route path='*' element={<S/>} /> */}

          </Routes>
        </div>
        <Footer />
      </div>
  
  );
}

export default App;
