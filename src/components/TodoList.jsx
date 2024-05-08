import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function TodoList({
  todoList,
  deleteTodo,
  toggleTodoDone,
  toggleTodoEditMode,
  editTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.editMode ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            toggleTodoEditMode={() => toggleTodoEditMode(todo.id)}
            editTodo={(task) => editTodo(todo.id, task)}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodoDone={() => toggleTodoDone(todo.id)}
            toggleTodoEditMode={() => toggleTodoEditMode(todo.id)}
          />
        ),
      )}
    </ul>
  ) : (
    <p>Aucune tâche pour le moment</p>
  );
}

export default TodoList;
