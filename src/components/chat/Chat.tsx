import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'

export default function Chat() {
  return (
    <div className='chat'>
      {/* Chat Header */}
      <ChatHeader />
      {/* Chat Message */}
      <div className='chatMessage'></div>
      {/* Chat Input */}
      <div className='chatInput'></div>
    </div>
  )
}
