import React from 'react'

export default function Todo({ todo, categories }) {
  // debugger
  return (
    <div className='todo'>
      <p id='todo-body'>{todo.body}</p>
      <p id='todo-category'>Category: {categories[todo.category_id - 1].name}</p>
    </div>
  )
}
