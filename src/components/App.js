import '../App.css'
import Header from './Header'
import TodoList from './TodoList'
import NewTodo from './NewTodo'

export default function App() {
  return (
    <div class='app'>
      <Header />
      <TodoList />
      <NewTodo />
    </div>
  )
}
