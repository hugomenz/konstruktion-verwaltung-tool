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
import { Alert, getAllAlertList, getAllProjectList, getAllTaskList, Project, Task } from "../../api";
import { getFilteredTaskList } from "../../api/api";
import { DashboardComponent } from "./dashboard.component";
import "./dashboard.component.css";

interface Props {
  user: string;
}

export const Dashboard = (props: Props) => {
  const { user } = props;

  // divide the information from JSON
  const [projects, setProjects] = useState<Project[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchData = () => {
    console.log(`Usuario logeado: ${user}`);

    if (user === "MANAGER") {
      // Obtener todos los proyectos, alertas y tareas
      setProjects(getAllProjectList());

      setTasks(getAllTaskList());
    } else {
      // Obtener los proyectos asignados al usuario, todas las alertas y las tareas filtradas por proyectos asignados
      setProjects(getAllProjectList().filter((project) => project.designer === user));

      const userProjectNumberList = projects.map((project) => project.projectNumber);
      setTasks(getFilteredTaskList(userProjectNumberList));
    }
  };

  useEffect(() => {
    setAlerts(getAllAlertList());
    fetchData();
  }, [user]);

  console.log(`inside dashboard >> projects: ${projects}`);
  console.log("------------------------------");
  console.log(`inside dashboard >> tasks: ${tasks}`);
  console.log("------------------------------");
  console.log(`inside dashboard >> alerts: ${alerts}`);
  console.log("------------------------------");

  return (
    <>
      <DashboardComponent projects={projects} tasks={tasks} alerts={alerts} />
    </>
  );
};
