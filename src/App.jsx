import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";

function App() {
  const [theme, setTheme] = useState("sky");
  const [todoList, setTodoList] = useState([]);

  function handleChangeTheme(e) {
    setTheme(e.target.value);
  }

  function addTodo(task) {
    const todo = {
      id: crypto.randomUUID(),
      task,
      done: false,
      editMode: false,
      selected: false,
    };

    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function toggleTodoDone(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function toggleTodoEditMode(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, editMode: !todo.editMode } : todo,
      ),
    );
  }

  function editTodo(id, task) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, task, editMode: false } : todo,
      ),
    );
  }

  function toggleSelectTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, selected: !todo.selected }
          : { ...todo, selected: false },
      ),
    );
  }

  return (
    <themeContext.Provider value={theme}>
      <section className="flex items-center justify-center p-4">
        <article className="container border bg-stone-50 p-4 shadow-sm">
          <h1 className="mb-8 text-3xl font-bold">Todo List</h1>

          <label htmlFor="theme">
            Thème:{" "}
            <select
              onChange={handleChangeTheme}
              name="theme"
              id="theme"
              value={theme}
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
            todoList={todoList}
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
