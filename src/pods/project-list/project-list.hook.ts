import * as React from "react";
import { getAllProjectList } from "./api/project-list.api";
import { ProjectEntityApi } from "./api/project-list.api-model";

export const useProjectCollection = () => {
  const [projectCollection, setProjectCollection] = React.useState<ProjectEntityApi[]>([]);

  const loadProjectCollection = () => {
    getAllProjectList().then((result) => setProjectCollection(result));
  };

  return { projectCollection, loadProjectCollection };
};
