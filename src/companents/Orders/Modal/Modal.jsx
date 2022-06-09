import React from 'react'
import './Modal.scss'

function Modal({ modalBtn, setModalBtn }) {
  return (
    <>
      <div className={`modal ${modalBtn ? "openModal" : ""}`}>
        <div className="modal__top">
          <h2>Payment</h2>
          <p>3 payment method available</p>
        </div>
        <div className="modal__method">
          <h3>Payment Method</h3>
          <ul className="modal__method_list">
            <li className="modal__method_item">
              <span><i className='bx bx-credit-card'></i></span>
              <p>Credit Card</p>
            </li>
            <li className="modal__method_item">
              <span><i className='bx bxl-paypal'></i></span>
              <p>Paypal</p>
            </li>
            <li className="modal__method_item">
              <span><i className='bx bx-wallet' ></i></span>
              <p>Cash</p>
            </li>
          </ul>
        </div>
        <form className="modal__form">
          <div className="modal__form_inp_box">
            <p>Cardholder Name</p>
            <input
              type="text"
              name="text" id="nameInp"
              placeholder='Levi Ackerman'
            />
          </div>
          <div className="modal__form_inp_box">
            <p>Card Number</p>
            <input
              type="number"
              name="number" id="numberInp"
              placeholder='2564 1421 0897 1244'
            />
          </div>
          <div className='modal__form_data_box'>
            <div className="modal__form_inp_box">
              <p>Expiration Date</p>
              <input
                type="data"
                name="data" id="dataInp"
                placeholder='02/2022'
              />
            </div>
            <div className="modal__form_inp_box">
              <p>CVV</p>
              <input
                type="data"
                name="data" id="dataInp"
                placeholder='•••'
              />
            </div>
          </div>
          <div className='modal__form_data_box'>
            <div className="modal__form_inp_box">
              <p>Order Type</p>
              <select>
                <option>Dine In</option>
                <option>To Go</option>
                <option>Delivery</option>
              </select>
            </div>
            <div className="modal__form_inp_box">
              <p>Table no.</p>
              <input
                type="number"
                name="number" id="passwordInp"
                placeholder='140'
              />
            </div>
          </div>
          <dir className='modal__form_btns'>
            <button className='modal__form_remov_btn' type='button' onClick={() => setModalBtn(false)}>Cancel</button>
            <button className='modal__form_submit_btn'>ConfirmPayment</button>
          </dir>
        </form>
      </div>
      <div className={`block-box ${modalBtn ? "blackOpen" : ""}`} onClick={() => setModalBtn(false)}></div>
    </>
  )
}

export default Modal
