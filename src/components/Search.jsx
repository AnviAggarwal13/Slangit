import React from 'react'
import '../styles.scss'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='Find a user...'/>
      </div>
      <div className="userChat">
        <img src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg" alt="" />
      <div className="userChatInfo">
        <span>Jane</span>
      </div>
      </div>
    </div>
  )
}

export default Search