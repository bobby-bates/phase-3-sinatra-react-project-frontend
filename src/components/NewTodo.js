import { useState } from 'react'

export default function NewTodo({ todos, categories }) {
  const [newTodoText, setNewTodoText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    
  }

  return (
    <form className='new-todo' onSubmit={handleSubmit}>
      <label>New todo:
        <input
          type='text'
          value={newTodoText}
          onChange={e => setNewTodoText(e.target.value)}
        />
      </label>
      <button type='submit'>Add</button>
    </form>
  )
}
