
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <Home/>  */}
        <Signin/>
        <Signup/>
        <Footer/> 
    </div>
  );
}

export default App;
