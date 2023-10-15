import { useTranslator } from "../hooks";

export type ProjectProgressOptionsType = {
  value: string;
  label: string;
};

export const ProjectProgressOptions = () => {
  const { t } = useTranslator();

  const projectProgressOptions: ProjectProgressOptionsType[] = [
    { value: "not-started", label: t("projectProgressOptions.notStarted") }, // this needs to be first
    { value: "pre-planning", label: t("projectProgressOptions.prePlanning") },
    { value: "kick-off", label: t("projectProgressOptions.kickOff") },
    { value: "10", label: "10%" },
    { value: "15", label: "15%" },
    { value: "20", label: "20%" },
    { value: "25", label: "25%" },
    { value: "30", label: "30%" },
    { value: "35", label: "35%" },
    { value: "40", label: "40%" },
    { value: "45", label: "45%" },
    { value: "50", label: "50%" },
    { value: "55", label: "55%" },
    { value: "60", label: "60%" },
    { value: "65", label: "65%" },
    { value: "70", label: "70%" },
    { value: "75", label: "75%" },
    { value: "80", label: "80%" },
    { value: "85", label: "85%" },
    { value: "90", label: "90%" },
    { value: "95", label: "95%" },
    { value: "complete", label: t("projectProgressOptions.complete") },
  ];

  return projectProgressOptions;
};
