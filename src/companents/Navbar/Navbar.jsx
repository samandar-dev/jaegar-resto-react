import React, { useState } from 'react'
import Logo from '../../assets/images/logo.svg'
import Nav from './Nav/Nav'
import './Navbar.scss'

function Navbar() {
  const btns = [
    {
      id: 1,
      icon: 'bx bx-home-alt',
      active: true,
      pathName: 'home'
    },
    {
      id: 2,
      icon: 'bx bxs-offer',
      active: false,
      pathName: ''
    },
    {
      id: 3,
      icon: 'bx bx-pie-chart-alt-2',
      active: false,
      pathName: ''
    },
    {
      id: 4,
      icon: 'bx bx-envelope-open',
      active: false,
      pathName: ''
    },
    {
      id: 5,
      icon: 'bx bx-bell',
      active: false,
      pathName: ''
    },
    {
      id: 6,
      icon: 'bx bxs-cog',
      active: false,
      pathName: 'setting'
    },
  ]
  const [navBtns, setNavBtns] = useState(btns)
  const [navbtnsArr, setNavbtnsArr] = useState([...btns])

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo_box">
          <img src={Logo} alt="site logo" />
        </div>
        <nav className="navbar__nav nav">
          <ul className="nav__list">
            <Nav navbtnsArr={navbtnsArr} setNavBtns={setNavBtns} />
          </ul>
        </nav>
        <div className="navbav__logout">
          <button className='navbar__logout_btn'>
            <i className='bx bx-log-in'></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
