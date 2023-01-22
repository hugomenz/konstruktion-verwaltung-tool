import { ProjectEntityApi } from "core/api/project-list/models/project-list.api-model";
import { getProjectList } from "core/api/project-list/project-list.api";
import * as React from "react";

export const useProjectCollection = () => {
  const [projectCollection, setProjectCollection] = React.useState<ProjectEntityApi[]>([]);

  const loadProjectCollection = () => {
    getProjectList().then((result) => setProjectCollection(result));
  };

  return { projectCollection, loadProjectCollection };
};
