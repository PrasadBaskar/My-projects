import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cricket from './Cricket';
import Cycling from './Cycling';
import Football from './Football';
import Golf from './Golf';
import Tennis from './Tennis';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    
    <div>
      
    
    
    
    <Router>
    <h1 id="bbc">B B C</h1>
       <p id="sport">SPORT</p>
     <nav> 
        <Link to="/" className="Link">Main</Link>
        <Link to="/Cricket" class="Link">Cricket</Link>
        <Link to="/Cycling" class="Link">Cycling</Link>
        <Link to="/Football" class="Link">Football</Link>
        <Link to="/Golf" class="Link">Golf</Link>
        <Link to="/Tennis" class="Link">Tennis</Link>
        
      </nav>
    <Routes>
        <Route path='/' element={"<main/>"}/>
         <Route path='/Cricket' element={<Cricket/>}/>
         <Route path='/Cycling' element={<Cycling/>}/>
         <Route path='/Football' element={<Football/>}/>
         <Route path='/Golf' element={<Golf/>}/>
         <Route path='/Tennis' element={<Tennis/>}/>
        </Routes>
    </Router>
    
    
     </div>
  )
}

export default Main