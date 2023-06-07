import { useTranslation } from "react-i18next";

export const useTranslator = () => {
  const { i18n, t } = useTranslation();

  return { i18n, t };
};
