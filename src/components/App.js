import { useState, useEffect } from 'react'
import '../App.css'
import Header from './Header'
import TodoList from './TodoList'
import NewTodo from './NewTodo'

export default function App() {
  const [todos, setTodos] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchTodosAndCategories() {
      const [todosResponse, categoriesResponse] = await Promise.all([
        fetch('http://localhost:9292/todos'),
        fetch('http://localhost:9292/categories')
      ])

      const todosArr = await todosResponse.json()
      const categoriesArr = await categoriesResponse.json()

      return [todosArr, categoriesArr]
    }

    fetchTodosAndCategories()
      .then(([todosArr, categoriesArr]) => {
        setTodos(todosArr)
        setCategories(categoriesArr)
      })
    }, [])

  const handleAddTodo = newTodo => setTodos([...todos, newTodo])
  
  const handleEditTodo = updatedTodo => {
    const todoToUpdate = todos.find(t => t.id === updatedTodo.id)
    todoToUpdate.body = updatedTodo.body
    setTodos([...todos, todoToUpdate])
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className='app'>
      <Header />
      <TodoList
        todos={todos}
        categories={categories}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <NewTodo
        todos={todos}
        categories={categories}
        onAddTodo={handleAddTodo}
      />
    </div>
  )
}
