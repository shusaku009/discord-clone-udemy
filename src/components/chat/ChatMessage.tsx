import React from 'react'
import "./ChatMessage.scss"
import { Avatar } from '@mui/material'

export default function ChatMessage() {
  return (
    <div className='message'><Avatar />
      <div className='messageInfo'>
        <h4>
          Shin Code
          <span className='messageTimeStamp'>2024/04/25</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
    </div>
  )
}
