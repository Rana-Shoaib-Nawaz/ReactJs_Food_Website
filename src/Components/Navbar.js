import React, { useState } from 'react'
import Logo from "../assets/PizzaLogo.png.png";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img alt='#' src={Logo} />
        <div className="hiddenLinks">
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/contact'>Contact Us</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar