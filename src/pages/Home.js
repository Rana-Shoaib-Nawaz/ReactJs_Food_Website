import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import '../styles/Home.css';

import MenuItem from './MenuItem';
import { CityList } from './CityList';

function Home() {
  return (
    <>
      <div className='home' style={{ backgroundImage: `url(https://img.sndimg.com/food/image/upload/v1/img/recipes/27/44/04/QSWAw5iTWStF1yEp8eU5_shroom%20burger%20SITE-1.jpg` }}>
        <div className='headerContainer' >
          <h1>SS KICHEN</h1>
          <p>24 Hours Available</p>
          <Link to='/menu'>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
      <div>
        <Container >
          <h1>Find us in these cities and many more!</h1>
        </Container>
        <div className='menu'>
      <h1 className='menuTitle'>Our Branches</h1>
      <div className='menuList'>
        {CityList.map((menuItem,key)=>{ 
          return <MenuItem key={key} image={menuItem.image} name={menuItem.name}/>
        })}
      </div>
    </div>
        
      </div>
    </>
  )
}

export default Home