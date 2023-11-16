import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  var a = "Hari";
  return (
    <div className="App">
      <header className="App-header">
        <h1>{a}</h1>
    
      <BrowserRouter>
        
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
        </Routes>

      </BrowserRouter>
      </header>
      {/* <Home />
      <About/> */}
    </div>
  );
}

export default App;
