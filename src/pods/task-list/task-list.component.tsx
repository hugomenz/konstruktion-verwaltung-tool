import React from "react";
import { Task } from "../../api";

import "./task-list.component.css"; // Importa tus estilos personalizados

interface Props {
  task: Task;
}

export const TaskList = (props: Props) => {
  const { task } = props;
  return (
    <div className="task-item" key={task.id}>
      <p className="task-description">
        {task.projectNumber} {task.description}
      </p>
      <p className="task-date">{task.date}</p>
      <p className="task-type">{task.type}</p>
      <p className="task-priority">
        {task.priority} {task.user}
      </p>
    </div>
  );
};
