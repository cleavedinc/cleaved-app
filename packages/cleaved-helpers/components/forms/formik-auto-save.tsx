import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { debounce } from "ts-debounce";
import { useFormikContext } from "formik";
import styled from "styled-components";
import { COLORS } from "@cleaved/ui";

type FormikAutoSaveProps = {
  className?: string;
  debounceMs?: number;
  errorSavingText?: string;
  lastSavedText?: string;
  savingText?: string;
};

const SavedTextAlert = styled.div`
  @keyframes fade {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  animation: fade 3s;
  animation-fill-mode: both;
  color: ${COLORS.GREEN_500};
`;

export const FormikAutoSave: FunctionComponent<FormikAutoSaveProps> = (props) => {
  const { className, debounceMs, errorSavingText, lastSavedText, savingText } = props;
  const formik = useFormikContext<any>();
  const [showSaveMessage, setShowDiv] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [result, setResult] = useState<string | undefined | null>(null);

  const debouncedSubmit = useCallback(
    debounce(() => {
      if (!formik.isValid || !formik.dirty) return false;

      return formik
        .submitForm()
        .then(() => {
          setLastSaved(new Date().toLocaleTimeString());
          setResult(lastSavedText);
          setShowDiv(true);
        })
        .catch(() => {
          setResult(errorSavingText);
          setShowDiv(true);
        });
    }, debounceMs),
    [formik.submitForm, formik.isValid, formik.initialValues, formik.values, debounceMs]
  );

  useEffect(() => {
    debouncedSubmit();
    return debouncedSubmit.cancel;
  }, [debouncedSubmit, formik.values]);

  useEffect(() => {
    if (showSaveMessage) {
      const timeout = setTimeout(() => {
        setShowDiv(false);
      }, 3000); // remove message after 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [showSaveMessage]);

  if (formik.isSubmitting) {
    setResult(savingText);
  } else if (Object.keys(formik.errors).length > 0) {
    setResult(errorSavingText);
  }

  return <>{showSaveMessage && <SavedTextAlert className={className}>{result}</SavedTextAlert>}</>;
};

FormikAutoSave.defaultProps = {
  debounceMs: 800,
  errorSavingText: "Error, please try again",
  lastSavedText: "Saved",
  savingText: "Saving...",
};
