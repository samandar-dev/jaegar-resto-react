import React from 'react'
import Navbar from './Navbar/Navbar'
import Center from './Center/Center'
import Orders from './Orders/Orders'

function Home({ saveArr, setSaveArr }) {
  return (
    <>
      <Navbar />
      <Center
        saveArr={saveArr}
        setSaveArr={setSaveArr}
      />
      <Orders
        saveArr={saveArr}
        setSaveArr={setSaveArr}
      />
    </>
  )
}

export default Home
