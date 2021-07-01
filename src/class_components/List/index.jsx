import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const {todos} = this.props

    return (
      <ul>
        {
          todos.map(
            todo => <Item {...todo} key={todo.id} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}></Item> //key: 如数据有自身的唯一标识，则尽量使用; {...todo}批量传递，等价于name={todo.name} id={todo.id} done={todo.done}
          )
        }
      </ul>
    )
  }
}
