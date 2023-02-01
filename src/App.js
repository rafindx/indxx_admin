import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Static from './Components/Static';
import About from './Components/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Sidebar></Sidebar>
    <Routes>
      <Route path="/" element={<Static/>}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
