import Preview from './pages/preview';
import Editor from './pages/editor';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
    {/* <Route path='/edit' element={<Editor/>}/> */}
    <Route index  element={<Editor/>}/>
    {/* <Route path='/about' element={<About/>}/> */}

      </Routes>
    </BrowserRouter>

  );
}

export default App;
