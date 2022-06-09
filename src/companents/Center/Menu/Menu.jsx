import React from 'react'
import Items from './Items/Items'
import './Menu.scss'

function Menu({ foodArr, saveArr, setSaveArr, addFoodArr, setaddFoodArr }) {
  return (
    <>
      <div className="menu">
        <div className="menu__top">
          <h3>Choose Dishes</h3>

          <select className='menu__top_selec'>
            <option>Dine In</option>
            <option>To Go</option>
            <option>Delivery</option>
          </select>
        </div>
        <ul className="menu__list">
          <Items
            foodArr={foodArr}
            saveArr={saveArr}
            setSaveArr={setSaveArr}
            addFoodArr={addFoodArr}
            setaddFoodArr={setaddFoodArr}
          />
        </ul>
      </div>
    </>
  )
}

export default Menu
