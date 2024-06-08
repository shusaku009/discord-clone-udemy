import React, { useEffect, useState } from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useAppSelector } from '../../app/hooks';
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, onSnapshot, orderBy, query, serverTimestamp, } from 'firebase/firestore';
import { db } from '../../firebase';
import { async } from '@firebase/util';
import { Timestamp } from 'firebase/firestore';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  }
}

export default function Chat() {
  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<Messages[]>([]);
  const channelName = useAppSelector((state) => state.channel.channelName)
  const channelId = useAppSelector((state) => state.channel.channelId)
  const user = useAppSelector((state) => state.user.user)

  useEffect(() => {
    let collectionRef = collection(db, "channels", String(channelId), "messages")

    const collectionRevOrderBy = query(collectionRef, orderBy("timestamp", "desc"))

    onSnapshot(collectionRevOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        })
      })
      setMessages(results)
    })
  }, [channelId])

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages");
    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    })
    setInputText('')
  };

  return (
    <div className='chat'>
      {/* Chat Header */}
      <ChatHeader channelName={channelName} />
      {/* Chat Message */}
      <div className='chatMessage'>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
      </div>
      {/* Chat Input */}
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="#Udemyへメッセージを送信" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText} />
          <button type="submit" className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
            送信
          </button>
        </form>

        <div className='chatInputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div >
  )
}
