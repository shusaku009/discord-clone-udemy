import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useAppSelector } from '../../app/hooks';

export default function Chat() {
  const channelName = useAppSelector((state) => state.channel.channelName)

  return (
    <div className='chat'>
      {/* Chat Header */}
      <ChatHeader channelName={channelName} />
      {/* Chat Message */}
      <div className='chatMessage'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* Chat Input */}
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="#Udemyへメッセージを送信" />
          <button type="submit" className='chatInputButton'>送信</button>
        </form>

        <div className='chatInputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}
