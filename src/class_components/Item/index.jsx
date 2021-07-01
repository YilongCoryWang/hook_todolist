import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  state = {mouse: false}

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state

    return (
      <li style={{backgroundColor: mouse ? '#ddd': 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={() => this.props.updateTodo(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={() => this.props.deleteTodo(id)} style={{display: mouse? 'block': 'none'}}>Delete</button>
      </li>
    )
  }
}
