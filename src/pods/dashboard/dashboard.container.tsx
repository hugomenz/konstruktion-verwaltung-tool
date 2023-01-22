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
import { ProjectEntityApi } from "../../core/api/project-list/models/project-list.api-model";
import { AlertEntityApi } from "core/api/project-list/models/alert-list.api-model";
import { TaskEntityApi } from "core/api/project-list/models/task-list.api-model";
import { getAllAlertList, getFilteredTaskList } from "core/api/project-list/project-list.business";
import { useConfig } from "pods/task-list/components/filter-options/configuration.hook";
import { useProjectCollection } from "pods/project-list/project-list.hook";
import { ConfigEntityApi } from "../../core/api/configuration/models/configuration.model";

interface Props {
  user: string;
}

export const Dashboard = (props: Props) => {
  const { user } = props;

  const { projectCollection, loadProjectCollection } = useProjectCollection();

  //const [config, loadConfig] = useConfig();

  const [configuration, setConfiguration] = useState<ConfigEntityApi>();

  const [projects, setProjects] = useState<ProjectEntityApi[]>([]);
  const [alerts, setAlerts] = useState<AlertEntityApi[]>([]);
  const [tasks, setTasks] = useState<TaskEntityApi[]>([]);

  React.useEffect(() => {
    loadProjectCollection();
    //loadConfig();
  }, []);

  const fetchData = () => {
    if (user === "MANAGER") {
      //console.log(projectCollection);
      setProjects(projectCollection);
    } else {
      setProjects(projectCollection.filter((project: ProjectEntityApi) => project.designer === user));
    }
  };

  useEffect(() => {
    fetchData();
    //setAlerts(getAllAlertList(projects));
    //setConfiguration(config);
  }, [user]);

  useEffect(() => {
    if (projects.length > 0) {
      //console.log(projects);
      setAlerts(getAllAlertList(projects));
    }
  }, [projects]);

  useEffect(() => {
    const userProjectNumberList = projectCollection.map((project) => project.projectNumber);
    setTasks(getFilteredTaskList(projects, userProjectNumberList));
  }, [projects]);

  return (
    <>
      <DashboardComponent projects={projects} tasks={tasks} alerts={alerts} />
    </>
  );
};
