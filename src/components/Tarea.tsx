type TareaProps = {
  tarea: string;
  borrarTarea: () => void;
};

export const Tarea = ({ tarea, borrarTarea }: TareaProps) => {
  return (
    <div className="flex items-center justify-between bg-gray-700 p-3 rounded-md mb-2">
      <span className="text-white">{tarea}</span>
      <button
        onClick={borrarTarea}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md"
      >
        Borrar
      </button>
    </div>
  );
};
