import { useState } from 'react'

export default function NewTodo({ todos, categories, onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    fetch('http://localhost:9292/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: newTodoText
        // category_id: TODO: Do logic to find category_id
      })
    })
      .then(r => r.json())
      .then(newTodo => {
        onAddTodo(newTodo)
        setNewTodoText('')
      })
    }

    const buildCategories = categories.map((cat, index) =>
    <option key={cat.name} value={cat.name}>{cat.name}</option>
  )

  return (
    <form className='new-todo-form' onSubmit={handleSubmit}>
      <label
        className='new-todo-form-child'
        htmlFor='new-todo-text'>
          New todo:
      </label>
      <input
        type='text'
        className='new-todo-form-child'
        id='new-todo-text'
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
      />
      <label
        className='new-todo-form-child'
        htmlFor='new-todo-categories-select'>
          Category:
      </label>
      <select className='new-todo-form-child' id='new-todo-categories-select'>
        <option value=''>Select:</option>
        {buildCategories}
      </select>
      <button className='new-todo-form-child' type='submit'>Add</button>
    </form>
  )
}
