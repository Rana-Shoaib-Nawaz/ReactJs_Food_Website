import React from 'react';
import {SandwichList} from './SandwichList';
import MenuItem from './MenuItem';


function Sandwich() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Sandwich</h1>
      <div className='menuList'>
        {SandwichList.map((menuItem,key)=>{ 
          return <MenuItem key={key} navigateToRoute={menuItem.navigateToRoute} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}
      </div>
    </div>
  );
}

export default Sandwich;