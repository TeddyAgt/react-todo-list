import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

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
    <section className="flex items-center justify-center p-4">
      <article className="container border bg-stone-50 p-4 shadow-sm">
        <h1 className="mb-8 text-3xl font-bold">Todo List</h1>

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
  );
}

export default App;
