import React, { useState } from 'react'
import CategorBtns from './CategorBtns/CategorBtns'
import './Categor.scss'

function Categor({ setFoodArr }) {
  const categorBtns = [
    {
      id: 1,
      name: 'Hot Dishes',
      categor: "hot-dishes",
      active: true
    },
    {
      id: 2,
      name: 'Cold Dishes',
      categor: "cold-dishes",
      active: false
    },
    {
      id: 3,
      name: 'Soup',
      categor: "soup",
      active: false
    },
    {
      id: 4,
      name: 'Grill',
      categor: 'grill',
      active: false
    },
    {
      id: 5,
      name: 'Appetizer',
      categor: 'appetizer',
      active: false
    },
    {
      id: 6,
      name: 'Dessert',
      categor: 'dessert',
      active: false
    },
  ]
  const [categorBtn, setCategorBtn] = useState(categorBtns)
  const [categorBtnArr, setCategorBtnArr] = useState([...categorBtns])


  return (
    <>
      <div className="categor">
        <ul className='categor__list'>
          <CategorBtns
            setFoodArr={setFoodArr}
            categorBtnArr={categorBtnArr}
            setCategorBtn={setCategorBtn}
          />
        </ul>
      </div>
    </>
  )
}

export default Categor
