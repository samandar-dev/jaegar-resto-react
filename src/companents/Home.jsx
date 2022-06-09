import React from 'react'
import Center from './Center/Center'
import Orders from './Orders/Orders'

function Home({ saveArr, setSaveArr, foodArr, setFoodArr, addFoodArr, setaddFoodArr }) {
  return (
    <>
      <Center
        foodArr={foodArr}
        setFoodArr={setFoodArr}
        saveArr={saveArr}
        setSaveArr={setSaveArr}
        addFoodArr={addFoodArr}
        setaddFoodArr={setaddFoodArr}
      />
      <Orders
        saveArr={saveArr}
        setSaveArr={setSaveArr}
      />
    </>
  )
}

export default Home
