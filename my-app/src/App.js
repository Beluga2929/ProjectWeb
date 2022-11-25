import logo from './logo.svg';
import { NavBar } from './NavBar';
import Bisection from './Rootof/Bisection';
import Falseposition from './Rootof/Falseposition';
import Onepoint from './Rootof/Onepoint';
import Newton from './Rootof/Newton';
import Secant from './Rootof/Secant';
import Carmer from './Solution/Carmer';
import './App.css';
import {BrowserRouter,Routes,Rote, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Bisection" element={<Bisection/>} />
        <Route path="/Falseposition" element={<Falseposition/>} />
        <Route path="/Onepoint" element={<Onepoint/>} />
        <Route path="/Newton" element={<Newton/>} />
        <Route path="/Secant" element={<Secant/>} />
        <Route path="/Carmer" element={<Carmer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
