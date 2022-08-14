import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, categories }) {
  const buildTodos = todos.map((todo, index) =>
    <Todo key={todo+index} todo={todo} categories={categories} />
  )

  return (
    <div className='todo-list'>
      {buildTodos}
    </div>
  )
}
