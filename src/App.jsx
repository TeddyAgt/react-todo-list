import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";
import todoReducer from "./reducers/todoReducer";
import { todoStateContext, todoDispatcherContext } from "./context/todoContext";

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

  return (
    <todoStateContext.Provider value={state}>
      <todoDispatcherContext.Provider value={dispatch}>
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

              <AddTodo />

              <TodoList />
            </article>
          </section>
        </themeContext.Provider>
      </todoDispatcherContext.Provider>
    </todoStateContext.Provider>
  );
}

export default App;
