// *******************************************************************************
// >> TODO: Obtener el tipo de usuario
// *******************************************************************************
// >> TODO: Un projecto tiene que tener 1 o varias personas asignadas al proyecto
//          los filtros dejan de funcionar. Hay que hacerlo como en las tareas
//          que se le pasa una lista de numero de proyectos
// *******************************************************************************
// *******************************************************************************
// *******************************************************************************
import React from "react";
import { AlertList } from "../alert-list/alert-list.component";
import { AlertEntityApi } from "../alert-list/api";
import { Calendar } from "../calendar/calender.component";
import { ProjectEntityApi } from "../project-list/api/project-list.api-model";
import { ProjectListContainer } from "../project-list/project-list.container";
import { TaskEntityApi } from "../task-list/api";
import { TaskListContainer } from "../task-list/task-list.container";

import "./dashboard.component.css"; // Importa tus estilos personalizados
interface Props {
  projects: ProjectEntityApi[];
  tasks: TaskEntityApi[];
  alerts: AlertEntityApi[];
}

export const DashboardComponent = (props: Props) => {
  const { projects, tasks, alerts } = props;

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
