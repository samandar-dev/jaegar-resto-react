import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

function Nav({ navbtnsArr, setNavBtns, setActID }) {

  const [btnsArr, setBtnsArr] = useState([...navbtnsArr])

  const navBtnActive = (id) => {
    setNavBtns(
      navbtnsArr.map(btn => {
        if (btn.id === id) {
          setActID(btn.id)
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
        <NavLink to={`/${btn.pathName}`} key={i + 1}>
          <li className='nav__item' onClick={() => navBtnActive(btn.id)}>
            <button
              className={`nav__btn ${btn.active ? "nav__btn-act" : ""}`}>
              <i className={btn.icon}></i>
            </button>
          </li>
        </NavLink>
      ))
      }
    </>
  )
}

export default Nav
