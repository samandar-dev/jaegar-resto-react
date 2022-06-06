import React from 'react'
import './OrdersItems.scss'

function OrdersItems({ saveArr, setSaveArr }) {
  const itemsRemoveFun = (id) => {
    setSaveArr(saveArr.filter(itm => {
      if (itm.id === id) {
        itm.count = 0
      } else {
        return itm
      }
    }))
  }

  return (
    <>
      {saveArr.map((sav, i) => (
        <li className='orders__save_item' key={i + 1}>
          <div className='orders__save_left'>
            <div className="orders__save_item_box">
              <div className='orders__save_itm'>
                <img src={sav.img} alt={sav.title} />
                <div>
                  <p>{sav.title}</p>
                  <p className='orders__save_price'>${sav.money}</p>
                </div>
              </div>
              <p className='ordes__save_count'>{sav.count}</p>
            </div>
            <div className="orders__save_item_inp">
              <input type="text" name="text" id="text" placeholder='Please, just a little bit spicy only.' />
            </div>
          </div>
          <div className="orders__save_right">
            <p>${(sav.money * sav.count).toFixed(2)}</p>
            <button onClick={() => itemsRemoveFun(sav.id)}>
              <i className='bx bx-trash-alt'></i>
            </button>
          </div>
        </li>
      ))}
    </>
  )
}

export default OrdersItems
