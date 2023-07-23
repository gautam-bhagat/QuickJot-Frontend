
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='' element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />

          <Route path='/about' element={
            <>
              <Navbar />
              <h1>About</h1>
              <Footer />
            </>
          } />



          <Route path='/signin' element={
            <>
              <Signin />
              <Footer />
            </>
          } />
          <Route path='/signup' element={

            <><Signup />
              <Footer /></>
          } />

        </Routes>



      </div>


    </BrowserRouter>
  );
}

export default App;
