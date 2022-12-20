// **************************************************************
// >> TODO: Componentizar en ekl task header lo de las opciones, crear carpeta componentes dentro de task-list

import React, { useState, useEffect } from "react";
import { Task } from "../../api";
import { FilterOptions } from "./components/filter-options.component";
import { TaskList } from "./task-list.component";

import "./task-list.component.css"; // Importa tus estilos personalizados

interface Props {
  data: Task[];
}

export const TaskListContainer = (props: Props) => {
  const { data } = props;

  const [filterPrio, setFilterPrio] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("Alle");
  const [selectedPriority, setSelectedPriority] = useState<any>("all");
  const [selectedType, setSelectedType] = useState<any>("Alle");

  const priorityMap: Record<number, string> = {
    1: "high",
    2: "med",
    3: "low",
  };

  const onFilterTypeChange = (newFilter: string) => {
    setFilterType(newFilter);
  };

  const onFilterPrioChange = (newFilter: string) => {
    setFilterPrio(newFilter);
  };

  const getPriorityString = (priority: number) => {
    return priorityMap[priority];
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`handlePriorityChange: ${event.target.value}`);
    setSelectedPriority(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`handleTypeChange: ${event.target.value}`);
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    onFilterTypeChange(selectedType);
  }, [selectedType]);

  useEffect(() => {
    onFilterPrioChange(selectedPriority);
  }, [selectedPriority]);

  console.log(`before filterredTasks FILTER TYPE: ${filterType}`);
  console.log(`before filterredTasks FILTER PRIO: ${filterPrio}`);

  const filteredTasks = data.reduce((acc: any, task: Task) => {
    if (filterPrio !== "all" && getPriorityString(task.priority) !== filterPrio) {
      return acc;
    }

    if (filterType !== "Alle" && task.type !== filterType) {
      return acc;
    }

    return [...acc, task];
  }, []);

  return (
    <div className="task-container">
      <div className="task-header">
        <FilterOptions
          selectedType={selectedType}
          selectedPriority={selectedPriority}
          handleTypeChange={handleTypeChange}
          handlePriorityChange={handlePriorityChange}
        />
      </div>
      <div className="task-lst-container">
        {filteredTasks.map((task: any) => (
          <TaskList key={task.description} task={task} />
        ))}
      </div>
    </div>
  );
};
