import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './components/home'
import {About} from './components/about'
import {Projects} from './components/projects'
import { Skills } from './components/skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path = '/skills' element={<Skills/>}/>
       
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
