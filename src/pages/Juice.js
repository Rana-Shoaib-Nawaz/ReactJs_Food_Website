import React from 'react';
import {JuiceList} from './JuiceList';
import MenuItem from './MenuItem';


function Juice() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Juice</h1>
      <div className='menuList'>
        {JuiceList.map((menuItem,key)=>{ 
          return <MenuItem key={key} navigateToRoute={menuItem.navigateToRoute} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}
      </div>
    </div>
  );
}

export default Juice;