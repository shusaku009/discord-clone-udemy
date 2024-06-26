import { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import './Sidebar.scss'
import SidebarChannel from './SidebarChannel';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import useCollection from '../../hooks/useCollection';



const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user)
  const { documents: channels } = useCollection("channels")

  return (
    <div className='sidebar'>
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src='./discordIcon.png' alt='Server Icon' />
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

          <div className='sidebarChannelList'>
            {channels.map((channel) => (
              <SidebarChannel channel={channel} id={channel.id} key={channel.id} />
            ))}
          </div>

          <div className='sidebarFooter'>
            <div className='sidebarAccount'>
              <img src={user?.photo} alt='' onClick={() => auth.signOut()} />
              <div className='accountName'>
                <h4>{user?.displayName}</h4>
                <span>{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className='sidebarVoice'>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
