import React, { useState } from 'react'
import OrdersItems from './OrdersItems/OrdersItems'
import './Orders.scss'
import Modal from './Modal/Modal';

function Orders({ saveArr, setSaveArr }) {
  const [modalBtn, setModalBtn] = useState(false)

  let subtotal = 0;
  let discount = 0;
  saveArr.map(itm => discount += itm.money / 10 * itm.count)
  saveArr.map(itm => subtotal += itm.money * itm.count)
  return (
    <>
      <div className="orders">
        <h3 className='orders__title'>Orders #34562</h3>
        <div className="orders__categor">
          <button className='orders__categor_btn ordcat-btn-act'>Dine In</button>
          <button className='orders__categor_btn'>To Go</button>
          <button className='orders__categor_btn'>Delivery</button>
        </div>
        <div className="orders__save_box">
          <div className="orders__save_title">
            <h4>Item</h4>
            <dir className='orders__save_righ-title'>
              <p>Qty</p>
              <p>Price</p>
            </dir>
          </div>
          <ul className="orders__save_list">
            <OrdersItems
              saveArr={saveArr}
              setSaveArr={setSaveArr}
            />
          </ul>
          <div className="orders__save_price_box">
            <div>
              <p>Discount</p>
              <p>Sub Total</p>
            </div>
            <div className='orders__save_total'>
              <p>$-{discount.toFixed(2)}</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
          </div>
          <button className='orders__submit_btn' onClick={() => setModalBtn(true)}>Continue to Payment</button>
        </div>
      </div>
      <Modal modalBtn={modalBtn} setModalBtn={setModalBtn} />
    </>
  )
}

export default Orders
