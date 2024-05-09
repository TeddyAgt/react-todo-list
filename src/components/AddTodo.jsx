import { useState } from "react";
import Button from "./Button";
import { useTodoDispatch } from "../context/todoContext";

function AddTodo() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useTodoDispatch();

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
      type: "ADD_TODO",
      task: value,
    });
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col items-center justify-center bg-stone-50 p-4"
    >
      <div className="flex w-full">
        <input
          className="mr-4 flex-auto rounded border border-stone-200 p-1"
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Ajouter une tâche"
        />
        <Button text={"Sauvegarder"} />
      </div>
      {error && <p className="text-red-500">Le champs est vide</p>}
    </form>
  );
}

export default AddTodo;
