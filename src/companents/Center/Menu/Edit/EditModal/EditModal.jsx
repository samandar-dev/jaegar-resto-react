import React from 'react'
import './EditModal.scss'

function EditModal({ editModal, setEditModal, settingObjArr, setSettingObjArr, editItem, setEditItem }) {

  let title, bolws, price;
  const editInutsFunc = (e) => {
    setEditItem(
      editItem.map(obj => {
        if (e.target.id === 'editName') {
          obj.title = e.target.value
        }
        if (e.target.id === 'editBolws') {
          obj.theRest = e.target.value
        }
        if (e.target.id === 'editPrice') {
          obj.money = e.target.value
        }
      })
    )
  }
  console.log(editItem);

  return (
    <>
      {editItem.map((itm, i) => (
        <div className={`editmodal ${editModal ? "editModalOpen" : ""}`} key={i + 1}>
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
                value={title}
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
                value={bolws}
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
                value={price}
                onChange={editInutsFunc}
                required
              />
            </div>
            <button className='editmodal__form_btn' onClick={() => setEditModal(false)}>Submit</button>
          </form>
        </div>
      ))}
      <div className={`editModalboxx ${editModal ? "editModalboxxOpen" : ""}`}></div>
    </>
  )
}

export default EditModal
