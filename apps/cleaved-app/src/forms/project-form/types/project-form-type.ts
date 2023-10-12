// import { StartEndDates } from "../../../generated-types/graphql";

export type ProjectFormType = {
  projectDetails: string;
  projectName: string;
  projectProgress: string;
  projectDates: { from: Date | undefined | null; to: Date | undefined | null };
};
