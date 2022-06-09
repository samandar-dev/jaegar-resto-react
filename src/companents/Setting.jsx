import React from 'react'
import Edit from './Center/Menu/Edit/Edit'
import Navbar from './Navbar/Navbar'
import Orders from './Orders/Orders'

function Setting({ saveArr, setSaveArr, foodArr, setFoodArr }) {
  return (
    <>
      <div className="container">
        <Navbar />
        <Edit
          foodArr={foodArr}
          setFoodArr={setFoodArr}
          saveArr={saveArr}
          setSaveArr={setSaveArr}
        />
      </div>
    </>
  )
}

export default Setting
