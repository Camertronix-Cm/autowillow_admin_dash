import React, { Component } from 'react'
import {MessageBox} from './MessageBox'
import { Chatlist } from './chatList'

export   const Chats  = () => {
  
    return (
      <div className='flex flex-row h-full'> <Chatlist/>< MessageBox/></div>
     
    )
 
}
