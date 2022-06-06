import React from 'react'
import './Nav.scss'

function Nav({ navbtnsArr, setNavBtns }) {
  const navBtnActive = (id) => {
    setNavBtns(
      navbtnsArr.map(btn => {
        if (btn.id === id) {
          btn.active = true
        }
        else {
          btn.active = false
        }
      })
    )
  }

  return (
    <>
      {navbtnsArr.map((btn, i) => (
        <li
          className={`nav__item ${btn.active ? "nav__item-act" : ""}`}
          key={i + 1}
          onClick={() => navBtnActive(btn.id)}>
          <button
            className={`nav__btn ${btn.active ? "nav__btn-act" : ""}`}
            onClick={() => navBtnActive(btn.id)}>
            <i className={btn.icon}></i>
          </button>
          <span className='topp'></span>
          <span className='bott'></span>
        </li>
      ))}
    </>
  )
}

export default Nav
