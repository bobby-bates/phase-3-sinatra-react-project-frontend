import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, categories, onUpdateTodo }) {
  const buildTodos = todos.map((todo, index) =>
    <Todo key={todo+index} todo={todo} categories={categories} onUpdateTodo={onUpdateTodo}/>
  )

  return (
    <div className='todo-list'>
      {buildTodos}
    </div>
  )
}
