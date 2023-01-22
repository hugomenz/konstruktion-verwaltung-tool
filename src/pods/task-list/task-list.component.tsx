import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RuleIcon from "@mui/icons-material/Rule";
import "./task-list.component.css"; // Importa tus estilos personalizados
import { TaskEntityApi } from "core/api/project-list/models/task-list.api-model";

interface Props {
  task: TaskEntityApi;
}

export const TaskList = (props: Props) => {
  const { task } = props;
  const [showIcons, setShowIcons] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<string>("");
  const [projectNumber, setProjectNumber] = useState<number>(0);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setProjectId(event.currentTarget.id.split("-")[2]);
    setProjectNumber(parseInt(event.currentTarget.id.split("-")[1]));

    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
  };

  const handleCheckClick = () => {
    // marcar la tarea como completada
  };

  const handleDeleteClick = () => {
    // eliminar la tarea del array
  };

  const handleEditClick = () => {
    // abrir formulario para editar la tarea
  };

  const handleRuleClick = () => {
    // marcar como incompleto
  };

  useEffect(() => {
    console.log(projectId);
    console.log(projectNumber);
  }, [projectId, projectNumber]);

  return (
    <div
      className="task-item"
      id={`task-${task.projectNumber}-${task.id}`}
      key={task.id}
      onClick={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      {showIcons && (
        <div className="task-icons">
          <CheckIcon onClick={handleCheckClick} />
          <RuleIcon style={{ marginLeft: "2rem" }} onClick={handleDeleteClick} />
          <DeleteIcon style={{ marginLeft: "2rem" }} onClick={handleDeleteClick} />
          <EditIcon style={{ marginLeft: "2rem" }} onClick={handleEditClick} />
        </div>
      )}
      <div className="box-left">
        <p className="task-prj">{task.projectNumber}</p>
        <p className="task-date">{task.date}</p>
      </div>
      <div className="box-center">
        <p className="task-prio">{`Prio. ${task.priority}`}</p>
        <p className="task-user">{task.user}</p>
      </div>
      <div className="box-right">
        <p className="task-type">{task.type}</p>
        <p className="task-desc">{task.description}</p>
      </div>
    </div>
  );
};
