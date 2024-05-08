import Button from "./Button";

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

      <Button
        text="Valider"
        className="mr-2"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoDone();
        }}
      />

      <Button
        text="Modifier"
        className="mr-2"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoEditMode();
        }}
      />

      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      />
    </li>
  );
}

export default TodoItem;
