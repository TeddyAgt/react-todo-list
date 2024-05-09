import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";
import { useContext } from "react";
import { todoStateContext } from "../context/todoContext";

function TodoList() {
  const state = useContext(todoStateContext);

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((todo) =>
        todo.editMode ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem key={todo.id} todo={todo} />
        ),
      )}
    </ul>
  ) : (
    <p>Aucune tâche pour le moment</p>
  );
}

export default TodoList;
