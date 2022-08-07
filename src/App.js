import React from 'react'
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './Components/Footer';
import Contact from './pages/Contact';
import Pizza from './pages/Pizza';
import Burger from './pages/Burger';
import Rice from './pages/Rice';
import Icecream from './pages/Icecream';
import Juice from './pages/Juice';
import Sandwich from './pages/Sandwich';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
       
      <Routes>
        <Route exect path='/' element={<Home/>}/>
        <Route index path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pizza' element={<Pizza/>}/>
        <Route path='/burger' element={<Burger/>}/>
        <Route path='/rice' element={<Rice/>}/>
        <Route path='/icecream' element={<Icecream/>}/>
        <Route path='/juice' element={<Juice/>}/>
        <Route path='/sandwich' element={<Sandwich/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </>
  );
}

export default App;
