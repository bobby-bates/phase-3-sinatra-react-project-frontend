import { useState } from 'react'

export default function EditTodo({ todo, onEditTodo }) {
  const [editTodoBody, setEditTodoBody] = useState(todo.body)
  // debugger
  const handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:9292/todos/${todo.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: editTodoBody }),
    })
      .then(r => r.json())
      .then(updatedTodo => {
        onEditTodo(updatedTodo)
        // NOTE: editTodoBody is already updated, no need to reset form
      })
  }

  return (
    <form className='edit-todo' onSubmit={handleSubmit}>
      <input className='edit-todo-child'
        type='text'
        value={editTodoBody}
        onChange={e => setEditTodoBody(e.target.value)}
      />
      <input className='edit-todo-child' type='submit' value='Save' />
    </form>
  )
}
