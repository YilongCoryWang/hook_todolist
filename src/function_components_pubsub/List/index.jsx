import React, {useState, useEffect} from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'

const List = () => {
  const [todos, setTodos] = useState([])
  const [pubsub_token, setPubsubToken] = useState([])

  const addTodo = (_, todoObj) => {
    const newTodos = [todoObj, ...todos]
    setTodos(newTodos)
  }

  const deleteTodo = (_, id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const updateTodo = (_, {id, done}) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        return {...todo, done}
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  const checkAllTodo = (_, done) => {
    const newTodos = todos.map(todo => {return {...todo, done}})
    setTodos(newTodos)
  }

  const clearAllDone = (_, data) => {
    const newTodos = todos.filter(todo => !todo.done)
    setTodos(newTodos)
  }

  useEffect(() => {
    console.log("useEffect componentDidUpdate")
    const add_todo = PubSub.subscribe('ADD_TODO', addTodo)
    const delete_todo = PubSub.subscribe('DELETE_TODO', deleteTodo)
    const update_todo = PubSub.subscribe('UPDATE_TODO', updateTodo)
    const check_all_todo = PubSub.subscribe('CHECK_ALL_TODO', checkAllTodo)
    const clear_all_done = PubSub.subscribe('CLEAR_ALL_DONE', clearAllDone)
    setPubsubToken([...pubsub_token, add_todo, delete_todo, update_todo, check_all_todo, clear_all_done])
    PubSub.publish("GET_TODOS", todos)
  }, [todos]) //componentDidUpdate

  useEffect(() => {
    return (()=> {
      pubsub_token.map((token) => {
        PubSub.unsubscribe(token)
      })
    })
  }, [todos]) //componentWillUnmount

  return (
    <ul>
      {
        todos.map(
          todo => <Item {...todo} key={todo.id}></Item> //key: 如数据有自身的唯一标识，则尽量使用; {...todo}批量传递，等价于name={todo.name} id={todo.id} done={todo.done}
        )
      }
    </ul>
  )
}

export default List