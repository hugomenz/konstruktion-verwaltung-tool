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
  const [showComplete, setShowComplete] = useState(false);

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

  const handleShowComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowComplete(event.target.checked);
  };

  const handleResetAllFilter = () => {
    setShowComplete(false);
    setSelectedType("Alle");
    setSelectedPriority("all");
  };

  useEffect(() => {
    onFilterTypeChange(selectedType);
  }, [selectedType]);

  useEffect(() => {
    onFilterPrioChange(selectedPriority);
  }, [selectedPriority]);

  const filteredTasks = data.filter((task: Task) => {
    return filterPrio !== "all" && getPriorityString(task.priority) !== filterPrio
      ? false
      : filterType !== "Alle" && task.type !== filterType
      ? false
      : !showComplete && task.isCompleted
      ? false
      : true;
  });

  return (
    <div className="task-container">
      <div className="task-header">
        <FilterOptions
          selectedType={selectedType}
          selectedPriority={selectedPriority}
          handleTypeChange={handleTypeChange}
          handlePriorityChange={handlePriorityChange}
          showComplete={showComplete}
          onShowComplete={handleShowComplete}
          onResetFilter={handleResetAllFilter}
        />
      </div>
      <div className="task-lst-container">
        {filteredTasks.map((task: any, index) => (
          <TaskList key={index} task={task} />
        ))}
      </div>
    </div>
  );
};
