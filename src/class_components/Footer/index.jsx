import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((acc, todo) => acc + (todo.done ? 1 : 0), 0)
    const total = todos.length

    return (
      <div>
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={(e) => this.props.checkAllTodo(e.target.checked)}/>
        </label>
        <span>
          <span>Done: {doneCount}</span> / All: {total}
        </span>
        <button onClick={this.props.clearAllDone}>Clear All Finished Tasks</button>
      </div>
    )
  }
}
