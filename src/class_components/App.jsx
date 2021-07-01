import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'

export default class App extends Component {
  //state在哪里，操作state的方法就在哪里
  state = {
    todos: [
      {id: '001', name: 'eat', done: true},
      {id: '002', name: 'drink', done: true},
      {id: '003', name: 'play', done: true},
      {id: '004', name: 'dance', done: true},
    ]
  }

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  updateTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        return {...todo, done: !todo.done}
      } else {
        return todo
      }
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => todo.id !== id)
    this.setState({todos: newTodos})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {return {...todo, done}})
    this.setState({todos: newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => !todo.done)
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state

    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }
}
