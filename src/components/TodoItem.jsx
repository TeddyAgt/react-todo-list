import { useContext } from "react";
import { todoDispatcherContext } from "../context/todoContext";
import Button from "./Button";

function TodoItem({ todo }) {
  const dispatch = useContext(todoDispatcherContext);

  return (
    <li
      onClick={() => {
        dispatch({
          type: "TOGGLE_SELECT",
          id: todo.id,
        });
      }}
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
          dispatch({
            type: "TOGGLE_DONE",
            id: todo.id,
          });
        }}
      />

      <Button
        text="Modifier"
        className="mr-2"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "TOGGLE_EDIT_MODE",
            id: todo.id,
          });
        }}
      />

      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "DELETE_TODO",
            id: todo.id,
          });
        }}
      />
    </li>
  );
}

export default TodoItem;
