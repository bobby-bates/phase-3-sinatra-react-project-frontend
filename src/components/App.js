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

  console.log('todos:', todos)
  console.log('categories:', categories)

  const handleAddTodo = newTodo => setTodos([...todos, newTodo])
  
  const handleEditTodo = updatedTodo => {
    // debugger
    // TODO: Find todo in state to update
    const todoToUpdate = todos.find(t => t.id === updatedTodo.id)
    todoToUpdate.body = updatedTodo.body
    setTodos([...todos, todoToUpdate])
    // setTodos([...todos, todos.find(t => t.id === updatedTodo.id).body = updatedTodo.body])

    // debugger
    // setTodos([...todos, updatedTodo])
  }

  return (
    <div className='app'>
      <Header />
      <TodoList todos={todos} categories={categories} onEditTodo={handleEditTodo} />
      <NewTodo todos={todos} categories={categories} onAddTodo={handleAddTodo} />
    </div>
  )
}
