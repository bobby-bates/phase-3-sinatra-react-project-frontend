import { useState } from 'react'
import EditTodo from './EditTodo'

export default function Todo({ todo, categories, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  // debugger

  const handleUpdateTodo = (updatedTodo) => {
    setIsEditing(false)
    onUpdateTodo(updatedTodo)

  }

  return (
    <div className='todo'>
    {isEditing ? (
      <EditTodo todo={todo} onUpdateTodo={handleUpdateTodo} />
    ) : (
      <>
        <p id='todo-body'>{todo.body}</p>
        <p id='todo-category'>Category: {categories[todo.category_id - 1].name}</p>
        <div className='actions'>
          <button onClick={() => setIsEditing(isEditing => !isEditing)}>
            Edit todo
          </button>
        </div>
      </>
    )}
    </div>
  )
}
