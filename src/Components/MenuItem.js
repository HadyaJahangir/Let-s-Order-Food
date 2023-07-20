import React from 'react'

function MenuItem(details) {
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${details.image})` }}></div>
      <h1>{details.name}</h1>
      <p>₹ {details.price}</p>
    </div>
  );
}

export default MenuItem;
