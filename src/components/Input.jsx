import React from 'react'
import download from "../images/download.png"
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type text here...' />
      <div className='send'>
      <i class="fa-solid fa-paperclip"></i>
      <input type="file" style={{display:"none"}} id="file" />
      <label htmlFor='file'>
      <img src={download} alt="" height={30}/>
      </label>
      <button>Send</button>
      </div>
    </div>
  )
}

export default Input