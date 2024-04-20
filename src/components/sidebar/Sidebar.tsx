import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
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
            <ExpandMoreIcon />
          </div>
        </div>
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
