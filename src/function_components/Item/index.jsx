import React, {useState} from "react";
import PropTypes from 'prop-types'

const Item = (props) => {
  const {id, name, done, updateTodo, deleteTodo} = props
  const [mouse, setMouse] = useState(false)

  const handleMouse = (flag) => {
    return () => {
      setMouse(flag)
    }
  }

  return (
    <li style={{backgroundColor: mouse ? '#ddd': 'white'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
      <label>
        <input type="checkbox" checked={done} onChange={() => updateTodo(id)}/>
        <span>{name}</span>
      </label>
      <button onClick={() => deleteTodo(id)} style={{display: mouse? 'block': 'none'}}>Delete</button>
    </li>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default Item