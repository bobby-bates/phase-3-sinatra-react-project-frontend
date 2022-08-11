import React from 'react'
import Todo from './Todo'
import EditTodo from './EditTodo'

export default function TodoList() {
  return (
    <>
      <h1>Hi from TodoList</h1>
      <Todo />
      <Todo />
      <Todo />
      <EditTodo />
    </>
  )
}
