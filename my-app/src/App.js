import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'; 
import Hero from './component/Hero';
import Portfolio from './component/portfolio';
import About from './component/About';
import Contact  from './component/Contact';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Portfolio/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
