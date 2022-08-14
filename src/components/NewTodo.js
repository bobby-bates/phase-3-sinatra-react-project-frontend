import { useState } from 'react'

export default function NewTodo({ todos, categories, onAddTodo }) {
  const [newTodoBody, setNewTodoBody] = useState('')
  const [newTodoCategory, setNewTodoCategory] = useState('')

  // NOTE: Not sure atm why onChange needs to pass categories into this
  // function rather than just calling categories on line 3.
  const handleCategoryChange = e => {
    setNewTodoCategory(categories.find(cat => cat.name === e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch('http://localhost:9292/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: newTodoBody,
        category_id: newTodoCategory.id
      })
    })
      .then(r => r.json())
      .then(newTodo => {
      // Update the todo list state in App.js:
        onAddTodo(newTodo)
      // Reset form:
        setNewTodoBody('')
        setNewTodoCategory('')
      })
    }

    const buildCategories = categories.map(cat =>
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
        value={newTodoBody}
        onChange={e => setNewTodoBody(e.target.value)}
      />
      <label
        className='new-todo-form-child'
        htmlFor='new-todo-categories-select'>
          Category:
      </label>
      <select
        className='new-todo-form-child'
        id='new-todo-categories-select'
        value={newTodoCategory.name}
        onChange={e => handleCategoryChange(e, categories)}
      >
        <option value=''>Select:</option>
        {buildCategories}
      </select>
      <button className='new-todo-form-child' type='submit'>Add</button>
    </form>
  )
}
