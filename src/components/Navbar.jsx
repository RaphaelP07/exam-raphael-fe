import React from 'react'

const Navbar = ({ setForm }) => {
  return (
    <div className='navbar'>
      <div className="nav-left">exam-raphael</div>
      <div className="nav-mid"></div>
      <div className="nav-right">
        <button className='crud-btn' onClick={() => setForm(true)} >ADD USER</button>
      </div>
    </div>
  )
}

export default Navbar