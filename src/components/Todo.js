import { useState } from 'react'
import EditTodo from './EditTodo'

export default function Todo({ todo, categories, onDeleteTodo, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false)

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/todos/${todo.id}`, {
      method: 'DELETE'
    })

    onDeleteTodo(todo.id)
  }

  return (
    <div className='todo'>
    {isEditing ? (
      <EditTodo todo={todo} onEditTodo={onEditTodo} />
    ) : (
      <>
        <p id='todo-body'>{todo.body}</p>
        <p id='todo-category'>Category: {categories[todo.category_id - 1].name}</p>
        <div className='actions'>
          <button onClick={() => setIsEditing(isEditing => !isEditing)}>
            Edit todo
          </button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </>
    )}
    </div>
  )
}
