import React from "react";
import { ProjectEntityApi } from "./api/project-list.api-model";

import "./project-list.component.css"; // Importa tus estilos personalizados

interface Props {
  data: ProjectEntityApi[];
  title: string;
  onAddProject: () => void;
  onHideProject: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hideInactive: boolean; // Nueva propiedad
}

export const ProjectList = (props: Props) => {
  const { data, title, onAddProject, onHideProject, hideInactive } = props;

  return (
    <div className="prj-container">
      <div className="prj-header">
        <div className="prj-header-left">
          <h2>{title}</h2>
        </div>
        <div className="prj-header-right">
          {" "}
          <button onClick={onAddProject}>Projekt anlegen</button>
          <label>
            Abgeschlossen aus
            <input type="checkbox" checked={hideInactive} onChange={onHideProject} />
          </label>
        </div>
      </div>
      <div className="prj-lst-container">
        {data.map((project, index) => {
          return (
            <div className="prj-btn" key={index}>
              <div className="btn-left">
                <p className="prj-title">{project.projectNumber}</p>
                <p className="prj-customer">{project.customer}</p>
              </div>
              <div className="btn-right">
                <p className="prj-desc">{project.description}</p>
                <p className="prj-estate">{project.estate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
