import React from 'react'
import Object from '../../../../Object'
import './Items.scss'

let arr = []
Object.map(obj => obj.count = 0)
function Items({ foodArr, saveArr, setSaveArr }) {

  const saveFuncHandler = (id) => {
    arr = saveArr
    Object.filter(obj => {
      if (obj.id === id) {
        obj.count += 1
        arr.push(obj)
      }
    })
    setSaveArr([...arr.filter((elem, inex, obj) => obj.indexOf(elem) === inex)])
  }

  return (
    <>
      {foodArr.map((foo, i) => (
        <li className='menu__item' key={i + 1} onClick={() => saveFuncHandler(foo.id)}>
          <div className="menu__item_img_box">
            <img src={foo.img} alt={foo.title} onClick={() => saveFuncHandler(foo.id)} />
          </div>
          <div>
            <h4 onClick={() => saveFuncHandler(foo.id)}>{foo.title}</h4>
            <p className='menu__item_money' onClick={() => saveFuncHandler(foo.id)}>{foo.money}</p>
            <p className='menu__item_theRest' onClick={() => saveFuncHandler(foo.id)}>{foo.theRest} Bowls available</p>
          </div>
        </li>
      ))}
    </>
  )
}

export default Items
