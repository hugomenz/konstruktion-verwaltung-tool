// >> TODO: Permitir el filtrado de prioridad, usuario o proyecto
// **************************************************************
// >> TODO: Componentizar en ekl task header lo de las opciones, crear carpeta componentes dentro de task-list

import React, { useState, useEffect } from "react";
import { Task } from "../../api";
import { TaskList } from "./task-list.component";

import "./task-list.component.css"; // Importa tus estilos personalizados

interface Props {
  data: Task[];
  //onFilterChange: () => void;
}

export const TaskListContainer = (props: Props) => {
  const { data } = props;
  /* const { data, onFilterChange } = props; */

  /* const [filter, setFilter] = useState(""); */

  const [selectedPriority, setSelectedPriority] = useState("todas");
  const [selectedType, setSelectedType] = useState("todos");

  /*   const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  }; */

  /*   const filteredTasks = data.filter((task) => {
    if (filter === "todas") {
      return true;
    } else if (filter === "prioridad") {
      return task.priority === filter;
    } else {
      return task.type === filter;
    }
  }); */

  /*   useEffect(() => {
    onFilterChange("priority", selectedPriority);
    onFilterChange("type", selectedType);
  }, [selectedPriority, selectedType]); // Este efecto se ejecutará cada vez que cambie selectedPriority o selectedType */

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriority(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="task-container">
      <div className="task-header">
        <label>
          Filtrar por prioridad:
          <select value={selectedPriority} onChange={handlePriorityChange}>
            <option value="todas">Todas</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </label>
        <label>
          Filtrar por tipo:
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="todos">Todos</option>
            <option value="cambio">Cambio</option>
            <option value="revision">Revisión</option>
            <option value="envio">Envío</option>
          </select>
        </label>
      </div>
      <div className="task-lst-container">
        {data.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
