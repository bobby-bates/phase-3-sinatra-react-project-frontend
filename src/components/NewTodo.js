import { useState } from 'react'

export default function NewTodo({ todos, categories }) {
  const [newTodoText, setNewTodoText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    fetch('http://localhost:9292/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: newTodoText,
        // category_id: TODO: Do logic to find category_id
      })
    })
      .then(r => r.json())
      .then(newTodo => {
        onAddTodo(newTodo)
        setNewTodoText('')
      })

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
