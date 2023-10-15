import { findObjectInArray } from "@cleaved/helpers";

import { ProjectProgressOptions, ProjectProgressOptionsType } from "../constants";
import { useProjectById } from "./use-project-by-id";

export const useProjectProgressOptions = (projectId: string): ProjectProgressOptionsType => {
  const projectData = useProjectById(projectId);

  const projectProgressOptions = ProjectProgressOptions();
  const projectProgressObject =
    projectData &&
    projectData.projectByIdData &&
    projectData.projectByIdData.projectProgress &&
    findObjectInArray(projectData.projectByIdData.projectProgress, projectProgressOptions);

  return projectProgressObject ? projectProgressObject : projectProgressOptions[0];
};
