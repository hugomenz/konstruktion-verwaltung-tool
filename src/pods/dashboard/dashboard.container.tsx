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
import { Alert, getAllAlertList, getAllProjectList, Project, Task } from "../../api";
import { getFilteredTaskList } from "../../api/api.task-list";
import { DashboardComponent } from "./dashboard.component";
import "./dashboard.component.css";

interface Props {
  user: string;
}

export const Dashboard = (props: Props) => {
  const { user } = props;

  const [projects, setProjects] = useState<Project[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchData = () => {
    if (user === "MANAGER") {
      setProjects(getAllProjectList());
    } else {
      setProjects(getAllProjectList().filter((project: Project) => project.designer === user));
    }
  };

  useEffect(() => {
    fetchData();
    setAlerts(getAllAlertList());
  }, [user]);

  useEffect(() => {
    const userProjectNumberList = projects.map((project) => project.projectNumber);
    setTasks(getFilteredTaskList(userProjectNumberList));
  }, [projects]);

  return (
    <>
      <DashboardComponent projects={projects} tasks={tasks} alerts={alerts} />
    </>
  );
};
