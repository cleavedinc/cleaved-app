export type ProjectFormType = {
  projectDetails: string;
  projectName: string;
  projectProgress: string;
  projectStartDate: { from: Date | undefined | null; to: Date | undefined | null };
};
