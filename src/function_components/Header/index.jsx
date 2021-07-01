import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

const Header = (props) => {
  const {addTodo} = props

  const handleKeyUp = (event) => {
    const {target, keyCode} = event
    if(keyCode !== 13) return
    if(target.value.trim() === '') {
      alert("Input can't be empty")
      return
    }
    addTodo({id: nanoid(), name: target.value, done: false})
    target.value = ''
  }

  return (
    <div>
      <input type="text" onKeyUp={handleKeyUp} placeholder="Please input a new task, end with Enter." style={{width: "500px"}}/>
    </div>
  )
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header