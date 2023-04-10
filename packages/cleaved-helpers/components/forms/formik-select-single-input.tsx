import React, { FunctionComponent } from "react";
import { useField, FieldHookConfig } from "formik";

import {
  FormField,
  FormFieldLabel,
  StyledFormFieldError,
  StyledFormFieldHint,
  FormFieldTag,
  SelectSingleInput,
} from "@cleaved/ui";

type FormikSelectSingleInputProps = FieldHookConfig<any> & {
  className?: string;
  hideLabel?: boolean; // use placeholder & aria-label if true, exists for niche forms like "table row forms"
  hint?: React.ReactNode;
  isDisabled?: boolean;
  isSearchable?: boolean;
  label?: React.ReactNode;
  maxMenuHeight?: number;
  options: any;
  SelectSingleInputValue: any;
  tag?: "optional" | "required";
};

export const FormikSelectSingleInput: FunctionComponent<FormikSelectSingleInputProps> = ({
  hideLabel = false,
  ...props
}) => {
  const [field, { touched, error }] = useField(props);
  const {
    className,
    hint,
    id,
    isDisabled,
    isSearchable,
    label,
    maxMenuHeight,
    name,
    onChange,
    options,
    placeholder,
    SelectSingleInputValue,
    tag,
  } = props;
  const errorMessage = error && touched ? error : undefined;
  const hasError = errorMessage !== undefined;
  const ariaLabel = hideLabel && typeof label === "string" ? label : undefined;
  const showFieldLabel = !hideLabel;
  const showFieldTag = !!tag;
  const showFieldHint = !!hint && !hasError;
  const showFieldError = hasError;

  return (
    <FormField hasError={hasError} className={className}>
      {showFieldLabel && (
        <FormFieldLabel>
          {label}
          {showFieldTag && <FormFieldTag> ({tag})</FormFieldTag>}
        </FormFieldLabel>
      )}
      <SelectSingleInput
        id={id}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        maxMenuHeight={maxMenuHeight}
        name={name}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        value={SelectSingleInputValue}
      />

      {showFieldHint && <StyledFormFieldHint>{hint}</StyledFormFieldHint>}
      <StyledFormFieldError>{`${showFieldError ? errorMessage : ""}`}</StyledFormFieldError>
    </FormField>
  );
};
