import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Parent from './Components/Parent';
// import Child from './Components/Child';
// import Parent1 from './Components/Parent1';
// import Child1 from './Components/Child1';

// import Ref from './Components/Ref';
// import TodoApp from './Components/TodoApp';

// import TrafficLight from './Components/TrafficLight';
//  import {BrowserRouter as Router, Routes, Route, Form} from 'react-router-dom';
//  import Home from './Components/Home';
// import Contact from './Components/Contact';
// import About from './Components/About';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
// import Main from './BBC/Main';
import Form from './Components/Form';
function App() {

//   useEffect(()=> {alert("this is loading");

//   })
 
  return (
   <div>
   {/* <Router>
    <Nav className="bg-dark text-white">
    <Nav.Item>
        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link><Link to="/About">About</Link></Nav.Link>
      </Nav.Item>
    </Nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>

    </Routes>
  </Router>
     */}
    <Form></Form>
   </div>
  );
}

export default App;
