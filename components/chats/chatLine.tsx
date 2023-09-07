import { Avatar } from '@nextui-org/react'
import React, { Component } from 'react'

export const  ChatLine = () =>{
  
    return (
        <div className="flex justify-between items-center p-3 hover:bg-gray-300 rounded-lg    ">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          className="w-20 h-20"
        />

        <div className="flex flex-col justify-between min-w-0 ml-4 mr-6 hidden md:block group-hover:gray   ">
          <p>Angelina Jolie</p>
          <div className="flex items-center text-sm text-gray-600 ">
            <div className="min-w-0">
              <p className="truncate">Ok, see you at the subway in a bit.</p>
            </div>
            <p className="ml-2 whitespace-no-wrap">30s</p>
          </div>
        </div>
      </div>
    )
 
}


