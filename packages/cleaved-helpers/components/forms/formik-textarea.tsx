import React, { FunctionComponent } from "react";
import { useField, FieldHookConfig } from "formik";
import styled from "styled-components";

import {
  FormField,
  FormFieldLabel,
  StyledFormFieldError,
  StyledFormFieldHint,
  FormFieldTag,
  Textarea,
  TextareaProps,
} from "@cleaved/ui";

type FormikTextareaProps = FieldHookConfig<any> &
  TextareaProps & {
    backgroundColor?: string;
    hasBorder?: boolean;
    hideLabel?: boolean; // use placeholder & aria-label if true, exists for niche forms like "table row forms"
    hint?: React.ReactNode;
    label?: React.ReactNode;
    minHeight?: string;
    tag?: "optional" | "required";
  };

const StyledFormikTextarea = styled(FormField)``;

export const FormikTextarea: FunctionComponent<FormikTextareaProps> = ({ hideLabel = false, ...props }) => {
  const [field, { touched, error }] = useField(props);
  const {
    backgroundColor,
    hasBorder,
    hint,
    label,
    minHeight,
    onKeyDown,
    onKeyUp,
    placeholder,
    tag,
    type: inputType,
  } = props;
  const errorMessage = error && touched ? error : undefined;
  const hasError = errorMessage !== undefined;
  const ariaLabel = hideLabel && typeof label === "string" ? label : undefined;
  const showFieldLabel = !hideLabel;
  const showFieldTag = !!tag;
  const showFieldHint = !!hint && !hasError;
  const showFieldError = hasError;

  return (
    <StyledFormikTextarea hasError={hasError}>
      {showFieldLabel && (
        <FormFieldLabel>
          {label}
          {showFieldTag && <FormFieldTag> ({tag})</FormFieldTag>}
        </FormFieldLabel>
      )}
      <Textarea
        aria-label={ariaLabel}
        backgroundColor={backgroundColor}
        hasBorder={hasBorder}
        minHeight={minHeight}
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        type={inputType}
        value={field.value}
      />
      {showFieldHint && <StyledFormFieldHint>{hint}</StyledFormFieldHint>}
      <StyledFormFieldError>{showFieldError && errorMessage}</StyledFormFieldError>
    </StyledFormikTextarea>
  );
};
