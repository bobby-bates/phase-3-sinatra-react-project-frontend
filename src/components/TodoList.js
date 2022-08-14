import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, categories, onEditTodo }) {
  // debugger
  const buildTodos = todos.map((todo, index) =>
    <Todo key={todo+index} todo={todo} categories={categories} onEditTodo={onEditTodo}/>
  )

  return (
    <div className='todo-list'>
      {buildTodos}
    </div>
  )
}
