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
import { DashboardComponent } from "./dashboard.component";
import "./dashboard.component.css";
import { useProjectCollection } from "../project-list/project-list.hook";
import { ProjectEntityApi } from "../project-list/api/project-list.api-model";
import { AlertEntityApi } from "../alert-list/api/alert-list.api-model";
import { TaskEntityApi } from "../task-list/api/task-list.api-model";
import { getAllAlertList } from "../alert-list/api";
import { getFilteredTaskList } from "../task-list/api";

interface Props {
  user: string;
}

export const Dashboard = (props: Props) => {
  const { user } = props;

  const { projectCollection, loadProjectCollection } = useProjectCollection();

  const [projects, setProjects] = useState<ProjectEntityApi[]>([]);
  const [alerts, setAlerts] = useState<AlertEntityApi[]>([]);
  const [tasks, setTasks] = useState<TaskEntityApi[]>([]);

  React.useEffect(() => {
    loadProjectCollection();
  }, []);

  const fetchData = () => {
    if (user === "MANAGER") {
      setProjects(projectCollection);
    } else {
      setProjects(projectCollection.filter((project: ProjectEntityApi) => project.designer === user));
    }
  };

  useEffect(() => {
    fetchData();
    setAlerts(getAllAlertList());
  }, [user]);

  useEffect(() => {
    const userProjectNumberList = projectCollection.map((project) => project.projectNumber);
    setTasks(getFilteredTaskList(userProjectNumberList));
  }, [projects]);

  return (
    <>
      <DashboardComponent projects={projects} tasks={tasks} alerts={alerts} />
    </>
  );
};
