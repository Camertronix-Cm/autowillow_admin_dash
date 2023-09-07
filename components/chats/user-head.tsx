import { Avatar } from '@nextui-org/react'
import React, { Component } from 'react'
import { render } from 'react-dom'

export default class UserHead extends Component {
  render() {
    return (
        <div className="flex flex-row">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <div className="pl-3 flex flex-col content-center">
          <span className="font-semibold">Gwagsi Glenn</span>
          <p className="text-sm">Looking for a Job</p>
        </div>
      </div>
    )
  }
}
