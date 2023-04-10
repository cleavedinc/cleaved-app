import React, { FunctionComponent } from "react";
import { useField, FieldHookConfig } from "formik";

import {
  FormField,
  FormFieldLabel,
  StyledFormFieldError,
  StyledFormFieldHint,
  FormFieldTag,
  TagInput,
} from "@cleaved/ui";

type FormikTagInputProps = FieldHookConfig<any> & {
  hideLabel?: boolean; // use placeholder & aria-label if true, exists for niche forms like "table row forms"
  hint?: React.ReactNode;
  label: React.ReactNode;
  options: any;
  tag?: "optional" | "required";
};

export const FormikTagInput: FunctionComponent<FormikTagInputProps> = ({ hideLabel = false, ...props }) => {
  const [field, { touched, error }] = useField(props);
  const { hint, id, label, name, onChange, options, placeholder, tag, value } = props;
  const errorMessage = error && touched ? error : undefined;
  const hasError = errorMessage !== undefined;
  const ariaLabel = hideLabel && typeof label === "string" ? label : undefined;
  const showFieldLabel = !hideLabel;
  const showFieldTag = !!tag;
  const showFieldHint = !!hint && !hasError;
  const showFieldError = hasError;

  return (
    <FormField hasError={hasError}>
      {showFieldLabel && (
        <FormFieldLabel>
          {label}
          {showFieldTag && <FormFieldTag> ({tag})</FormFieldTag>}
        </FormFieldLabel>
      )}
      <TagInput name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} options={options} />

      {showFieldHint && <StyledFormFieldHint>{hint}</StyledFormFieldHint>}
      <StyledFormFieldError>{`${showFieldError ? errorMessage : ""}`}</StyledFormFieldError>
    </FormField>
  );
};
