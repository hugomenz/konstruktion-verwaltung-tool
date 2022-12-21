import React, { useState } from "react";
import { ProjectEntityApi } from "./api/project-list.api-model";
import { ProjectList } from "./project-list.component";

interface Props {
  data: ProjectEntityApi[];
}

export const ProjectListContainer = (props: Props) => {
  const { data } = props;
  const [hideInactive, setHideInactive] = useState(false);

  const handleAddProject = () => {
    window.alert("Agregar Nuevo Proyecto!");
  };

  const handleHideInactive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHideInactive(event.target.checked);
  };

  const filteredProjects = data.filter((project) => !hideInactive || project.isActive);

  return (
    <div className="prj-container">
      <ProjectList
        data={filteredProjects}
        title="Projekt List"
        onAddProject={handleAddProject}
        onHideProject={handleHideInactive}
        hideInactive={hideInactive}
      />
    </div>
  );
};
