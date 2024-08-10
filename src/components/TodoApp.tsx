import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    setNuevaTarea("");
  };

  const handleBorrarTarea = (index: number) => {
    setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Lista de tareas</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nueva tarea"
            className="flex-grow p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Agregar
          </button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
      </div>
    </div>
  );
};