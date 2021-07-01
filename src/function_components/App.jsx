import React, { useState } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'

const App = () => {
  //state在哪里，操作state的方法就在哪里
  const [todos, setTodos] = useState(
    [
      {id: '001', name: 'eat', done: true},
      {id: '002', name: 'drink', done: true},
      {id: '003', name: 'play', done: true},
      {id: '004', name: 'dance', done: true}
    ])

  const addTodo = (todoObj) => {
    const newTodos = [todoObj, ...todos]
    setTodos(newTodos)
  }

  const updateTodo = (id) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        return {...todo, done: !todo.done}
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const checkAllTodo = (done) => {
    const newTodos = todos.map(todo => {return {...todo, done}})
    setTodos(newTodos)
  }

  const clearAllDone = () => {
    const newTodos = todos.filter(todo => !todo.done)
    setTodos(newTodos)
  }

  return (
    <div>
      <Header addTodo={addTodo}/>
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      <Footer todos={todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone}/>
    </div>
  )
}

export default App