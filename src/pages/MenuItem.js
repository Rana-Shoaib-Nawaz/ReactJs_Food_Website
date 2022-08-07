import React from 'react'
import { useNavigate } from 'react-router-dom';

function MenuItem({image,name,price, navigateToRoute}) {
  const navigate = useNavigate();
  return (
    <div className='menuItem' onClick={() => navigateToRoute && navigate(navigateToRoute)}> 
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default MenuItem