import React from 'react'
import PubSub from 'pubsub-js'

import {nanoid} from 'nanoid'

const Header = () => {
  const handleKeyUp = (event) => {
    const {target, keyCode} = event
    if(keyCode !== 13) return
    if(target.value.trim() === '') {
      alert("Input can't be empty")
      return
    }
    PubSub.publish('ADD_TODO', {id: nanoid(), name: target.value, done: false})
    target.value = ''
  }

  return (
    <div>
      <input type="text" onKeyUp={handleKeyUp} placeholder="Please input a new task, end with Enter." style={{width: "500px"}}/>
    </div>
  )
}

export default Header