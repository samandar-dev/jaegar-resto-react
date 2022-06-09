import React from 'react'
import Menu from './Menu/Menu'
import Categor from './Categor/Categor'
import './Center.scss'

function Center({ saveArr, setSaveArr, foodArr, setFoodArr, addFoodArr, setaddFoodArr }) {
  return (
    <>
      <div className="center">
        <div className="center__top">
          <div className="canter__name_box">
            <h2>Jaegar Resto</h2>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <div className="center__top_inp">
            <span>
              <i className='bx bx-search'></i>
            </span>
            <input
              type="text"
              name="text"
              id="text"
              placeholder='Search for food, coffe, etc..'
            />
          </div>
        </div>
        <Categor
          setFoodArr={setFoodArr}
          addFoodArr={addFoodArr}
          setaddFoodArr={setaddFoodArr}
        />
        <Menu
          foodArr={foodArr}
          saveArr={saveArr}
          setSaveArr={setSaveArr}
          addFoodArr={addFoodArr}
          setaddFoodArr={setaddFoodArr}
        />
      </div>
    </>
  )
}

export default Center
