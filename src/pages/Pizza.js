import React from 'react';
import {PizzaList} from './PizzaList';
import MenuItem from './MenuItem';


function Pizza() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Pizza</h1>
      <div className='menuList'>
        {PizzaList.map((menuItem,key)=>{ 
          return <MenuItem key={key} navigateToRoute={menuItem.navigateToRoute} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}
      </div>
    </div>
  );
}

export default Pizza;
