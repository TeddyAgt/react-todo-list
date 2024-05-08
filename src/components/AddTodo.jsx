import { useState } from "react";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
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
    addTodo(value);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="-50 mb-4 flex flex-col items-center justify-center p-4"
    >
      <div className="flex w-full">
        <input
          className="mr-4 flex-auto rounded border border-stone-200 p-1"
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Ajouter une tâche"
        />
        <button className="rounded bg-sky-500 px-2 py-1 text-white hover:bg-sky-600">
          Sauvegarder
        </button>
      </div>
      {error && <p className="text-red-500">Le champs est vide</p>}
    </form>
  );
}

export default AddTodo;
