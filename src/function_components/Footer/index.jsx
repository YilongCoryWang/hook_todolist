import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
  const {todos, clearAllDone, checkAllTodo} = props
  const doneCount = todos.reduce((acc, todo) => acc + (todo.done ? 1 : 0), 0)
  const total = todos.length

  return (
    <div>
      <label>
        <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={(e) => checkAllTodo(e.target.checked)}/>
      </label>
      <span>
        <span>Done: {doneCount}</span> / All: {total}
      </span>
      <button onClick={clearAllDone}>Clear All Finished Tasks</button>
    </div>
  )
}

Footer.propTypes = {
  todos: PropTypes.array.isRequired, 
  clearAllDone: PropTypes.func.isRequired,
  checkAllTodo: PropTypes.func.isRequired
}
export default Footer