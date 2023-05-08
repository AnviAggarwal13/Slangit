import React from 'react'
import '../styles.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src='https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg' alt=''></img>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar