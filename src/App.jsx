import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";
import todoReducer from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: "sky",
    todoList: [],
  });

  function handleChangeTheme(e) {
    dispatch({
      type: "SET_THEME",
      color: e.target.value,
    });
  }

  function addTodo(task) {
    dispatch({
      type: "ADD_TODO",
      task,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      id,
    });
  }

  function toggleTodoDone(id) {
    dispatch({
      type: "TOGGLE_DONE",
      id,
    });
  }

  function toggleTodoEditMode(id) {
    dispatch({
      type: "TOGGLE_EDIT_MODE",
      id,
    });
  }

  function editTodo(id, task) {
    dispatch({
      type: "EDIT_TODO",
      id,
      task,
    });
  }

  function toggleSelectTodo(id) {
    dispatch({
      type: "TOGGLE_SELECT",
      id,
    });
  }

  return (
    <themeContext.Provider value={state.theme}>
      <section className="flex items-center justify-center p-4">
        <article className="container border bg-stone-50 p-4 shadow-sm">
          <h1 className="mb-8 text-3xl font-bold">Todo List</h1>

          <label htmlFor="theme">
            Thème:{" "}
            <select
              onChange={handleChangeTheme}
              name="theme"
              id="theme"
              value={state.theme}
              className="rounded p-2"
            >
              <option className="bg-sky-500" value="sky">
                Sky
              </option>
              <option className="bg-teal-500" value="teal">
                Teal
              </option>
              <option className="bg-orange-500" value="orange">
                Orange
              </option>
            </select>
          </label>

          <AddTodo addTodo={addTodo} />

          <TodoList
            todoList={state.todoList}
            deleteTodo={deleteTodo}
            toggleTodoDone={toggleTodoDone}
            toggleTodoEditMode={toggleTodoEditMode}
            editTodo={editTodo}
            toggleSelectTodo={toggleSelectTodo}
          />
        </article>
      </section>
    </themeContext.Provider>
  );
}

export default App;
