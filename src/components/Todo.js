import { useState } from 'react'
import EditTodo from './EditTodo'

export default function Todo({ todo, categories, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  // debugger
  // const handleEditTodo = (props) => {
  //   debugger
  //   setIsEditing(false)
  //   // onEditTodo(updatedTodo)
  // }

  // function handleEditTodo(updatedTodo, onEditTodo) {
  //   setIsEditing(false)
  //   debugger
  //   onEditTodo(updatedTodo)
  // }

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
        </div>
      </>
    )}
    </div>
  )
}
