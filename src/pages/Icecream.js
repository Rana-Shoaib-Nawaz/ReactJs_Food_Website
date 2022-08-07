import React from 'react';
import {IcecreamList} from './IcecreamList';
import MenuItem from './MenuItem';


function Icecream() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Ice Cream</h1>
      <div className='menuList'>
        {IcecreamList.map((menuItem,key)=>{ 
          return <MenuItem key={key} navigateToRoute={menuItem.navigateToRoute} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}
      </div>
    </div>
  );
}

export default Icecream;