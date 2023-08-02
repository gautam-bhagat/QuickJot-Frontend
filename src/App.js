
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import NoteState from './Context/notes/NoteState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Check from './Components/Check';



function App() {

  
  return (

    <NoteState>
      <BrowserRouter>
        <div className="App">

          <Routes>
            <Route path='' element={
              <>
                <Navbar />
                <Check/>
                 
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
    </NoteState>


  );
}

export default App;
