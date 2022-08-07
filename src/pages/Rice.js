import React from 'react';
import {RiceList} from './RiceList';
import MenuItem from './MenuItem';


function Rice() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Rice</h1>
      <div className='menuList'>
        {RiceList.map((menuItem,key)=>{ 
          return <MenuItem key={key} navigateToRoute={menuItem.navigateToRoute} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}
      </div>
    </div>
  );
}

export default Rice;