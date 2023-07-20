import React from 'react'
import {MenuList} from '../Helper/MenuList'
import MenuItem from '../Components/MenuItem';
import '../styles/menu.css'

function Menu() {
  return(   
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map(
                (item) =>{
                    return(
                        <MenuItem image={item.image} name={item.name} price={item.price} />
                    )
                }
            )}
        </div>
      
    </div>
  );
}

export default Menu;
