import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const {target, keyCode} = event
    if(keyCode !== 13) return
    if(target.value.trim() === '') {
      alert("Input can't be empty")
      return
    }
    this.props.addTodo({id: nanoid(), name: target.value, done: false})
    target.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="Please input a new task, end with Enter." style={{width: "500px"}}/>
      </div>
    )
  }
}
