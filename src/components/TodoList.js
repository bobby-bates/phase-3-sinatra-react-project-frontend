import React from 'react'
import Todo from './Todo'
import EditTodo from './EditTodo'

export default function TodoList() {
  return (
    <div className='todoList'>
      <Todo />
      <Todo />
      <Todo />
      <EditTodo />
    </div>
  )
}
