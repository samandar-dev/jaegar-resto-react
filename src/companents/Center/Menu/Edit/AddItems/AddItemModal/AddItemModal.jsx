import React, { useRef, useState } from 'react'
import '../../EditModal/EditModal.scss'

function AddItemModal({ addModal, setAddModal, addFoodArr, setaddFoodArr, foodArr, setFoodArr }) {

  const [itemID, setItemID] = useState(0)
  const [titleVal, setTitleVal] = useState('')
  const [theRestVal, setTheRestVal] = useState(0)
  const [moneyVal, setMoneyVal] = useState(0)
  const [categorVal, setCategorVal] = useState("")

  const addItemsInputsHandler = (e) => {
    if (e.target.id === 'editName') {
      setTitleVal(e.target.value)
    }
    if (e.target.id === 'editBolws') {
      setTheRestVal(e.target.value)
    }
    if (e.target.id === 'editPrice') {
      setMoneyVal(e.target.value)
    }
    if (e.target.id === 'editmodalCategor') {
      setCategorVal(e.target.value)
    }
  }

  const addItemsSubmitHandler = (e) => {
    e.preventDefault()
    let obj = {
      id: addFoodArr.length + 1,
      img: "https://picsum.photos/150",
      title: titleVal,
      theRest: theRestVal,
      money: moneyVal,
      foodType: categorVal,
      count: 0,
    }
    console.log(obj);
    setaddFoodArr([obj, ...addFoodArr])
    setFoodArr([obj, ...foodArr])
    e.target.reset()
  }

  return (
    <>
      <div className={`editmodal ${addModal ? "editModalOpen" : ""}`}>
        <div className='editmodal__remBtn-box'>
          <button className='editmodal__remov_btn'
            onClick={() => (setAddModal(false), setTitleVal(""), setMoneyVal(0), setTheRestVal(0))}>
            <i className='bx bx-x'></i>
          </button>
        </div>
        <h2 className="editmodal__title">Add Item</h2>
        <form className='editmodal__form' onSubmit={addItemsSubmitHandler}>
          <div className="editmodal__form_inp_box">
            <p>Name</p>
            <input
              type="text"
              name="text" id="editName"
              placeholder='Edit name...'
              onChange={addItemsInputsHandler}
              value={titleVal}
              required
            />
          </div>
          <div className="editmodal__form_inp_box">
            <p>Bolws</p>
            <input
              type="number"
              name="number" id="editBolws"
              placeholder='Edit bolws...'
              onChange={addItemsInputsHandler}
              value={theRestVal}
              required
            />
          </div>
          <div className="editmodal__form_inp_box">
            <p>Price</p>
            <input
              type="number"
              name="number" id="editPrice"
              placeholder='Edit price...'
              onChange={addItemsInputsHandler}
              value={moneyVal}
              required
            />
          </div>
          <div className="editmodal__form_inp_box">
            <p>Categor</p>
            <select className='editmodal__form_categor' id='editmodalCategor' onChange={addItemsInputsHandler}>
              <option value='hot-dishes'>Hot dishes</option>
              <option value='grill'>Grill</option>
              <option value='appetizer'>Appetizer</option>
              <option value='dessert'>Dessert</option>
              <option value='soup'>Soup</option>
              <option value='cold-dishes'>Cold dishes</option>
            </select>
          </div>
          <button className='editmodal__form_btn' type='submit' onClick={() => setAddModal(false)}>Submit</button>
        </form>
      </div>
      <div className={`editModalboxx ${addModal ? "editModalboxxOpen" : ""}`}
        onClick={() => (setAddModal(false), setTitleVal(""), setMoneyVal(0), setTheRestVal(0))}>
      </div>
    </>
  )
}

export default AddItemModal
