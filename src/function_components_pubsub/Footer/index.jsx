import React, {useState, useEffect} from 'react'
import PubSub from 'pubsub-js'

const Footer = () => {
  const [todos, setTodos] = useState([])
  const [token, setTokens] = useState(null)
  const doneCount = todos.reduce((acc, todo) => acc + (todo.done ? 1 : 0), 0)
  const total = todos.length

  const getTodos = (_, list_todos) => {
    setTodos(list_todos)
  }

  useEffect(() => {
    const get_todos = PubSub.subscribe('GET_TODOS', getTodos)
    setTokens(get_todos)
  }, [todos]) //[]里面是componentDidUpdate的条件, 若同时componentDidMount也存在，则只保留componentDidUpdate即可

  useEffect(() => {
    return (()=> {
      PubSub.unsubscribe(token)
    })
  }, [todos]) //componentWillUnmount

  return (
    <div>
      <label>
        <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={(e) => PubSub.publish("CHECK_ALL_TODO", e.target.checked)}/>
      </label>
      <span>
        <span>Done: {doneCount}</span> / All: {total}
      </span>
      <button onClick={() => PubSub.publish("CLEAR_ALL_DONE")}>Clear All Finished Tasks</button>
    </div>
  )
}

export default Footer