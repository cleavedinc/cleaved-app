import React, { FunctionComponent } from "react";
import { useField, FieldHookConfig } from "formik";
import {
  FormField,
  FormFieldLabel,
  StyledFormFieldError,
  StyledFormFieldHint,
  FormFieldTag,
  Textbox,
  TextboxProps,
} from "@cleaved/ui";

export type FormikTextboxProps = FieldHookConfig<any> &
  Partial<Pick<TextboxProps, "mask" | "placeholder" | "renderLeft" | "renderRight" | "type">> & {
    hideLabel?: boolean; // use placeholder & aria-label if true, exists for niche forms like "table row forms"
    hint?: React.ReactNode;
    label?: React.ReactNode;
    tag?: "optional" | "required";
  };

export const FormikTextbox: FunctionComponent<FormikTextboxProps> = ({
  hideLabel = false,
  mask,
  renderLeft,
  renderRight,
  ...props
}) => {
  const [field, { touched, error }] = useField(props);
  const { hint, label, placeholder, tag, type: inputType } = props;
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
      <Textbox
        aria-label={ariaLabel}
        mask={mask}
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        placeholder={placeholder}
        renderLeft={renderLeft}
        renderRight={renderRight}
        type={inputType}
        value={field.value}
      />
      {showFieldHint && <StyledFormFieldHint>{hint}</StyledFormFieldHint>}
      <StyledFormFieldError>{`${showFieldError ? errorMessage : ""}`}</StyledFormFieldError>
    </FormField>
  );
};
