import React from 'react'
import './EditModal.scss'

function EditModal({
  editModal, setEditModal,
  editItem, setEditItem,
  itemID, setItemID,
  titleVal, setTitleVal,
  theRestVal, setTheRestVal,
  moneyVal, setMoneyVal,
  categorVal, setCategorVal,
}) {

  const editInutsFunc = (e) => {
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

  const editSubmitHandler = (e) => {
    e.preventDefault()
    setEditModal(false)
    setEditItem(editItem.map(itm => {
      itm.id = itemID
      itm.title = titleVal
      itm.money = moneyVal
      itm.theRest = theRestVal
      itm.foodType = categorVal
    }))
  }

  return (
    <>
      <div className={`editmodal ${editModal ? "editModalOpen" : ""}`}>
        <div className='editmodal__remBtn-box'>
          <button className='editmodal__remov_btn' onClick={() => setEditModal(false)}>
            <i className='bx bx-x'></i>
          </button>
        </div>
        <h2 className="editmodal__title">Edit Item</h2>
        <form className='editmodal__form'>
          <div className="editmodal__form_inp_box">
            <p>Name</p>
            <input
              type="text"
              name="text" id="editName"
              placeholder='Edit name...'
              value={titleVal}
              onChange={editInutsFunc}
              required
            />
          </div>
          <div className="editmodal__form_inp_box">
            <p>Bolws</p>
            <input
              type="number"
              name="number" id="editBolws"
              placeholder='Edit bolws...'
              value={theRestVal}
              onChange={editInutsFunc}
              required
            />
          </div>
          <div className="editmodal__form_inp_box">
            <p>Price</p>
            <input
              type="number"
              name="number" id="editPrice"
              placeholder='Edit price...'
              value={moneyVal}
              onChange={editInutsFunc}
              required
            />
          </div>
          <div className="editmodal__form_inp_box">
            <p>Categor</p>
            <select className='editmodal__form_categor' id='editmodalCategor' onChange={editInutsFunc}>
              <option value='hot-dishes'>Hot dishes</option>
              <option value='grill'>Grill</option>
              <option value='appetizer'>Appetizer</option>
              <option value='dessert'>Dessert</option>
              <option value='soup'>Soup</option>
              <option value='cold-dishes'>Cold dishes</option>
            </select>
          </div>
          <button className='editmodal__form_btn' onClick={editSubmitHandler}>Submit</button>
        </form>
      </div>
      <div className={`editModalboxx ${editModal ? "editModalboxxOpen" : ""}`}
        onClick={() => (setEditModal(false))}>
      </div>
    </>
  )
}

export default EditModal
