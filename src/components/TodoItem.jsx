function TodoItem({
  todo,
  deleteTodo,
  toggleTodoDone,
  toggleTodoEditMode,
  toggleSelectTodo,
}) {
  return (
    <li
      onClick={toggleSelectTodo}
      className={`mb-3 flex items-center justify-center rounded p-2 ${todo.selected ? "border-2 border-sky-200" : ""}`}
    >
      <span className="mr-4 flex-auto">
        {todo.task} {todo.done && "( ✓ )"}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoDone();
        }}
        className="mr-1 rounded bg-sky-500 p-1 text-sm text-white"
      >
        Valider
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoEditMode();
        }}
        className="mr-1 rounded bg-sky-500 p-1 text-sm text-white"
      >
        Modifier
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
        className="rounded bg-red-500 p-1 text-sm text-white"
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
