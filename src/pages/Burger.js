import React from 'react';
import {BurgerList} from './BurgerList';
import MenuItem from './MenuItem';


function Burger() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burger</h1>
      <div className='menuList'>
        {BurgerList.map((menuItem,key)=>{ 
          return <MenuItem key={key} navigateToRoute={menuItem.navigateToRoute} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}
      </div>
    </div>
  );
}

export default Burger;