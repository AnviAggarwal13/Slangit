import React from 'react'
import '../styles.scss'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src='https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg' alt=''></img>
        <span>John</span>
        <button onClick={signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar