// *******************************************************************************
// >> TODO: Obtener el tipo de usuario
// *******************************************************************************
// >> TODO: Un projecto tiene que tener 1 o varias personas asignadas al proyecto
//          los filtros dejan de funcionar. Hay que hacerlo como en las tareas
//          que se le pasa una lista de numero de proyectos
// *******************************************************************************
// *******************************************************************************
// *******************************************************************************
import React, { useState, useEffect } from "react";
import { AlertList } from "../alert-list/alert-list.component";
import { Calendar } from "../calendar/calender.component";
import { Alert, getAllAlertList, getAllProjectList, getAllTaskList, Project, Task } from "../../api";

import "./dashboard.component.css"; // Importa tus estilos personalizados
import { ProjectListContainer } from "../project-list/project-list.container";
import { TaskListContainer } from "../task-list/task-list.container";
import { getFilteredTaskList } from "../../api/api";

interface Props {
  user: string;
}

export const Dashboard = (props: Props) => {
  const { user } = props;

  // divide the information from JSON
  const [projects, setProjects] = useState<Project[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    console.log(`Usuario logeado: ${user}`);

    if (user === "MANAGER") {
      // Obtener todos los proyectos, alertas y tareas
      setProjects(getAllProjectList());
      setAlerts(getAllAlertList());
      setTasks(getAllTaskList());
    } else {
      // Obtener los proyectos asignados al usuario, todas las alertas y las tareas filtradas por proyectos asignados
      setProjects(getAllProjectList().filter((project) => project.designer === user));
      setAlerts(getAllAlertList());

      const userProjectNumberList = projects.map((project) => project.projectNumber);
      setTasks(getFilteredTaskList(userProjectNumberList));
    }
  }, [user]);

  return (
    <div className="dashboard">
      <div className="dash-col-left">
        <ProjectListContainer data={projects} />
        <TaskListContainer data={tasks} />
      </div>
      <div className="dash-col-right">
        <AlertList data={alerts} title="Meldungen" />
        <Calendar />
      </div>
    </div>
  );
};
