import React from 'react'
import '../../../Categor/CategorBtns/CategorBtns.scss'

function EditCategor({ categorBtnArr, setCategorBtn, setSettingObjArr, addFoodArr }) {
  const navBtnActive = (id) => {
    setCategorBtn(
      categorBtnArr.map(btn => {
        if (btn.id === id) {
          btn.active = true
        }
        else {
          btn.active = false
        }
      })
    )
  }

  const categorFuncHandler = (cat) => {
    setSettingObjArr(addFoodArr.filter(btn => btn.foodType === cat));
  }

  return (
    <>
      {categorBtnArr.map((btn, i) => (
        <li className='categor__item' key={i + 1}>
          <button
            className={`categor__item_btn ${btn.active ? "categor__item-act" : ""}`}
            key={i + 1}
            onClick={() => (navBtnActive(btn.id), categorFuncHandler(btn.categor))}>{btn.name}
          </button>
        </li>
      ))}
    </>
  )
}

export default EditCategor

