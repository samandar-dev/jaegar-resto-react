import React from 'react'
import Navbar from './Navbar/Navbar'
import Center from './Center/Center'
import Orders from './Orders/Orders'

function Home({ saveArr, setSaveArr, foodArr, setFoodArr }) {
  return (
    <>
      <div className="container">
        <Navbar />
        <Center
          foodArr={foodArr}
          setFoodArr={setFoodArr}
          saveArr={saveArr}
          setSaveArr={setSaveArr}
        />
        <Orders
          saveArr={saveArr}
          setSaveArr={setSaveArr}
        />
      </div>
    </>
  )
}

export default Home
