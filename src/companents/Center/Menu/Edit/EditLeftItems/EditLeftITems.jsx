import React from 'react'
import './EditLeftItems.scss'

function EditLeftITems({ editLeftItems }) {
  return (
    <>
      {editLeftItems.map((item, i) => (
        <li className="setting__item" key={i + 1}>
          <div>
            <span><i className={item.icon}></i></span>
          </div>
          <div>
            <p className='setting__tit'>{item.tit}</p>
            <p className='setting__text'>{item.text}</p>
          </div>
        </li>
      ))}
    </>
  )
}

export default EditLeftITems
