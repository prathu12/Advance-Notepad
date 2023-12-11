import './App.css';
import NavBar from './components/NavBar';
import Notepad from './components/Notepad';
import About from './components/About';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Notepad />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
