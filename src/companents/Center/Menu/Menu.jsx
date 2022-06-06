import React from 'react'
import Items from './Items/Items'
import './Menu.scss'

function Menu({ foodArr, saveArr, setSaveArr }) {
  return (
    <>
      <div className="menu">
        <div className="menu__top">
          <h3>Choose Dishes</h3>

          <select className='menu__top_selec'>
            <option>Dine In</option>
            <option>Dine In</option>
            <option>Dine In</option>
            <option>Dine In</option>
          </select>
        </div>
        <ul className="menu__list">
          <Items
            foodArr={foodArr}
            saveArr={saveArr}
            setSaveArr={setSaveArr}
          />
        </ul>
      </div>
    </>
  )
}

export default Menu
