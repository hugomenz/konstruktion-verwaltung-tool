// >> TODO: Permitir el filtrado de prioridad, usuario o proyecto
// **************************************************************
// >> TODO: Componentizar en ekl task header lo de las opciones, crear carpeta componentes dentro de task-list

import React, { useState, useEffect } from "react";
import { Task } from "../../api";
import { TaskList } from "./task-list.component";

import "./task-list.component.css"; // Importa tus estilos personalizados

interface Props {
  data: Task[];
}

export const TaskListContainer = (props: Props) => {
  //const { data } = props;
  const { data } = props;

  const [filter, setFilter] = useState("all");

  const [selectedPriority, setSelectedPriority] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const onFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const priorityMap: Record<number, string> = {
    1: "high",
    2: "med",
    3: "low",
  };

  const getPriorityString = (priority: number) => {
    return priorityMap[priority];
  };

  console.log(data);

  const filteredTasks = data.filter((task) => {
    console.log(`inside filteredTask >> filter: ${filter}`);
    if (filter === "all") {
      return true;
    } else if (filter === "high") {
      return getPriorityString(task.priority) === filter;
    } else {
      return task.type === filter;
    }
  });

  //console.log(filteredTasks);

  useEffect(() => {
    onFilterChange(selectedPriority);
    onFilterChange(selectedType);
  }, [selectedPriority, selectedType]); // Este efecto se ejecutará cada vez que cambie selectedPriority o selectedType

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedPriority(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedType(event.target.value);
  };

  return (
    <div className="task-container">
      <div className="task-header">
        <label>
          Filtrar por prioridad:
          <select value={selectedPriority} onChange={handlePriorityChange}>
            <option value="all">Todas</option>
            <option value="high">Alta</option>
            <option value="med">Media</option>
            <option value="low">Baja</option>
          </select>
        </label>
        <label>
          Filtrar por tipo:
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="all">Todos</option>
            <option value="change">Cambio</option>
            <option value="revision">Revisión</option>
            <option value="envio">Envío</option>
          </select>
        </label>
      </div>
      <div className="task-lst-container">
        {filteredTasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
