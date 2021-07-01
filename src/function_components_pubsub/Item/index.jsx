import React, {useState} from "react"
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

const Item = (props) => {
  const {id, name, done} = props
  const [mouse, setMouse] = useState(false)

  const handleMouse = (flag) => {
    return () => {
      setMouse(flag)
    }
  }

  const handleChange = (event) => {
    PubSub.publish('UPDATE_TODO', {id, done: event.target.checked})
  }

  return (
    <li style={{backgroundColor: mouse ? '#ddd': 'white'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
      <label>
        <input type="checkbox" checked={done} onChange={handleChange}/>
        <span>{name}</span>
      </label>
      <button onClick={() => PubSub.publish('DELETE_TODO', id)} style={{display: mouse? 'block': 'none'}}>Delete</button>
    </li>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}

export default Item