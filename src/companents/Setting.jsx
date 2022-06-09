import React from 'react'
import Edit from './Center/Menu/Edit/Edit'

function Setting({ saveArr, setSaveArr, foodArr, setFoodArr, addFoodArr, setaddFoodArr }) {
  return (
    <>
      <Edit
        foodArr={foodArr}
        setFoodArr={setFoodArr}
        saveArr={saveArr}
        setSaveArr={setSaveArr}
        addFoodArr={addFoodArr}
        setaddFoodArr={setaddFoodArr}
      />
    </>
  )
}

export default Setting
