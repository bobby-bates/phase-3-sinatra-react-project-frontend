import Todo from './Todo'

export default function TodoList({
  todos,
  categories,
  onEditTodo,
  onDeleteTodo
}) {

  const buildTodos = todos.map((todo, index) =>
    <Todo
      key={todo+index}
      todo={todo}
      categories={categories}
      onEditTodo={onEditTodo}
      onDeleteTodo={onDeleteTodo}
    />
  )

  return (
    <div className='todo-list'>
      {buildTodos}
    </div>
  )
}
