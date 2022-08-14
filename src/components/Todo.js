import React from 'react'

export default function Todo({ todo, categories }) {
  // debugger
  return (
    <div className='todo'>
      <p>{todo.body}</p>
      <p>Category: {categories[todo.category_id - 1].name}</p>
    </div>
  )
}
