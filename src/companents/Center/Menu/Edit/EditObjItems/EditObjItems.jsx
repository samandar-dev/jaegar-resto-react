import React from 'react'
import './EditObjItems.scss'

function EditObjItems({ settingObjArr, setEditModal, editFuncHandler }) {
  return (
    <>
      {settingObjArr.map((obj, i) => (
        <li className="setting__food__right_item" key={i + 1}>
          <div>
            <img src={obj.img} alt="" />
            <h4>{obj.title}</h4>
            <p>$ {obj.money} • {obj.theRest} Bowls</p>
          </div>
          <button onClick={() => (setEditModal(true), editFuncHandler(obj.id))}>
            <i className='bx bx-edit-alt'></i> Edit dish
          </button>
        </li>
      ))}
    </>
  )
}

export default EditObjItems
