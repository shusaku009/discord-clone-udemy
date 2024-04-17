import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src='./logo192.png' alt='Server Icon' />
        </div>
        <div className='serverIcon'>
          <img src='./logo192.png' alt='Server Icon' />
        </div>
      </div>
      <div className='sidebarRight'>
        <div>
          <div className='sidebarTop'>
            <h3>Discord</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
