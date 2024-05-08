import { useState } from "react";
import Button from "./Button";

function EditTodo({ todo, editTodo, toggleTodoEditMode }) {
  const [value, setValue] = useState(todo.task);
  const [error, setError] = useState(false);

  function handleChange(e) {
    const inputValue = e.target.value;

    setValue(inputValue);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!value.length) {
      setError(true);
      return;
    }
    setError(false);
    editTodo(value);
    setValue("");
  }

  return (
    <li>
      <form
        onSubmit={handleSubmit}
        className="mb-3 flex flex-col items-center justify-center p-4"
      >
        <div className="flex w-full">
          <input
            className="mr-4 flex-auto rounded border border-stone-200 p-1"
            type="text"
            onChange={handleChange}
            value={value}
            placeholder="Ajouter une tâche"
          />

          <Button text="Sauvegarder" type="submit" className="mr-2" />

          <Button text="Annuler" onClick={toggleTodoEditMode} />
        </div>
        {error && <p className="text-red-500">Le champs est vide</p>}
      </form>
    </li>
  );
}

export default EditTodo;
