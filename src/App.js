import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './components/About';
import Contact from './components/Contact';
// import Header from './components/Header';
import Home from './components/Home';



function App() {
  return (
    < BrowserRouter>
      < Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
