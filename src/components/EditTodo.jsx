import { useContext, useState } from "react";
import { todoDispatcherContext } from "../context/todoContext";
import Button from "./Button";

function EditTodo({ todo }) {
  const [value, setValue] = useState(todo.task);
  const [error, setError] = useState(false);
  const dispatch = useContext(todoDispatcherContext);

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
    dispatch({
      type: "EDIT_TODO",
      id: todo.id,
      task: value,
    });
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

          <Button
            text="Annuler"
            onClick={() => {
              dispatch({
                type: "TOGGLE_EDIT_MODE",
                id: todo.id,
              });
            }}
          />
        </div>
        {error && <p className="text-red-500">Le champs est vide</p>}
      </form>
    </li>
  );
}

export default EditTodo;
