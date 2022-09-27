import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Pagenotfound from './Components/Pagenotfound';
import Signup from './Components/Signup';
import Signin from './Components/Signin';

function App() {
  return (

    <div className="App">
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin/>}/>

          {/* 404 Page*/}
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
