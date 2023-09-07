import { Avatar } from '@nextui-org/react'
import React, { Component } from 'react'
 

export const UserHead = () => {
 
    return (
        <div className="flex flex-row">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <div className="pl-3 flex flex-col content-center">
          <span className="font-semibold">Gwagsi Glenn</span>
          <p className="text-sm">Active 2hrs ago</p>
        </div>
      </div>
    )
 
}
