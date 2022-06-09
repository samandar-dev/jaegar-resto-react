import React, { useEffect, useState } from 'react'
import Object from '../../../../Object'
import EditCategor from './EditCategor/EditCategor'
import EditObjItems from './EditObjItems/EditObjItems'
import EditLeftITems from './EditLeftItems/EditLeftITems'
import './Edit.scss'
import EditModal from './EditModal/EditModal'

function Edit({ saveArr, setSaveArr, foodArr, setFoodArr }) {
  const settingsArr = [
    {
      id: 1,
      icon: 'bx bx-heart',
      tit: 'Appereance',
      text: 'Dark and Light mode, Font size',
    },
    {
      id: 2,
      icon: 'bx bx-store-alt',
      tit: 'Your Restaurant',
      text: 'Dark and Light mode, Font size',
    },
    {
      id: 3,
      icon: 'bx bxs-offer',
      tit: 'Products Management',
      text: 'Manage your product, pricing, etc',
    },
    {
      id: 4,
      icon: 'bx bx-bell',
      tit: 'Notifications',
      text: 'Customize your notifications',
    },
    {
      id: 5,
      icon: 'bx bx-lock-open-alt',
      tit: 'Security',
      text: 'Configure Password, PIN, etc',
    },
    {
      id: 6,
      icon: 'bx bx-lock-open-alt',
      tit: 'Security',
      text: 'Configure Password, PIN, etc',
    },
    {
      id: 7,
      icon: 'bx bx-info-circle',
      tit: 'About Us',
      text: 'Find out more about Posly',
    },
  ]
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
  const [editLeftItems, setEditLeftItems] = useState(settingsArr)
  const [categorBtn, setCategorBtn] = useState(categorBtns)
  const [categorBtnArr, setCategorBtnArr] = useState([...categorBtns])
  const [settingObjArr, setSettingObjArr] = useState([])
  const [editModal, setEditModal] = useState(false)
  const [editItem, setEditItem] = useState([])

  const editFuncHandler = (id) => {
    setEditItem([...settingObjArr.filter(itm => id === itm.id)])
  }

  useEffect(() => {
    setSettingObjArr(Object.filter(obj => obj.foodType === 'hot-dishes'))
  }, []);

  return (
    <>
      <div className="setting">
        <h2>Settings</h2>
        <div className='setting__inner'>
          <div className="setting__left">
            <ul className="setting__list">
              <EditLeftITems
                editLeftItems={editLeftItems}
                setEditLeftItems={setEditLeftItems}
              />
            </ul>
          </div>
          <div className="setting__right">
            <div className="setting__right_top">
              <h3>Products Management</h3>
              <button>
                <i className='bx bx-slider-alt'></i> Manage Categories
              </button>
            </div>
            <div className="setting__right_menu">
              <div className="setting__right_categor categor">
                <ul className='setting__right_list categor__list'>
                  <EditCategor
                    categorBtnArr={categorBtnArr}
                    setCategorBtn={setCategorBtn}
                    setSettingObjArr={setSettingObjArr}
                  />
                </ul>
              </div>
              <div className="setting__right_foods">
                <ul className="setting__right_food_list">
                  <li className="setting__right_food_item-add">
                    <div>
                      <span>+</span>
                      <p>Add new dish</p>
                    </div>
                  </li>
                  <EditObjItems
                    editFuncHandler={editFuncHandler}
                    setEditModal={setEditModal}
                    settingObjArr={settingObjArr}
                  />
                </ul>
                <button className='setting__discard_btn'>Discard Changes</button>
                <button className='setting__save_btn'>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditModal
        editItem={editItem}
        setEditItem={setEditItem}
        editModal={editModal}
        setEditModal={setEditModal}
        settingObjArr={settingObjArr}
        setSettingObjArr={setSettingObjArr}
      />
    </>
  )
}

export default Edit
