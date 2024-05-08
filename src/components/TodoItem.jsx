function TodoItem({ todo, deleteTodo, toggleTodoDone, toggleTodoEditMode }) {
  return (
    <li className="mb-3 flex items-center justify-center p-2">
      <span className="mr-4 flex-auto">
        {todo.task} {todo.done && "( ✓ )"}
      </span>
      <button
        onClick={toggleTodoDone}
        className="mr-1 rounded bg-sky-500 p-1 text-sm text-white"
      >
        Valider
      </button>
      <button
        onClick={toggleTodoEditMode}
        className="mr-1 rounded bg-sky-500 p-1 text-sm text-white"
      >
        Modifier
      </button>
      <button
        onClick={deleteTodo}
        className="rounded bg-red-500 p-1 text-sm text-white"
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
