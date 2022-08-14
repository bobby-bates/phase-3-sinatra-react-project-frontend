import { useState } from 'react'

export default function NewTodo({ todos, categories, onAddTodo}) {
  const [newTodoText, setNewTodoText] = useState('')
  const [newTodoCategory, setNewTodoCategory] = useState('')

  // NOTE: Not sure why onChange needs to pass categories into this
  // rather than just calling categories.
  const handleCategoryChange = e => {
    setNewTodoCategory(categories.find(cat => cat.name === e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('newTodoText:', newTodoText)
    console.log('newTodoCategory', newTodoCategory)
    // debugger
    fetch('http://localhost:9292/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: newTodoText,
        category_id: newTodoCategory.id
      })
    })
      .then(r => r.json())
      .then(newTodo => {
        debugger
      // Update the todo list state:
        onAddTodo(newTodo)
      // Reset form:
        setNewTodoText('')
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
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
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
        // onChange={e => {
        //   debugger
        //   setNewTodoCategory(e.target.value)}
        // }
      >
        <option value=''>Select:</option>
        {buildCategories}
      </select>
      <button className='new-todo-form-child' type='submit'>Add</button>
    </form>
  )
}
