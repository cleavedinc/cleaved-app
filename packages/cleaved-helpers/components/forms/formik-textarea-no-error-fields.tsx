import React, { FunctionComponent } from "react";
import { useField, FieldHookConfig } from "formik";
import styled from "styled-components";

import { FormField, Textarea, TextareaProps } from "@cleaved/ui";

type FormikTextareaNoErrorFieldsProps = FieldHookConfig<any> &
  TextareaProps & {
    backgroundColor?: string;
    hasBorder?: boolean;
    hideLabel?: boolean; // use placeholder & aria-label if true, exists for niche forms like "table row forms"
    hint?: React.ReactNode;
    label?: React.ReactNode;
    minHeight?: string;
    tag?: "optional" | "required";
  };

const StyledFormikTextareaNoErrorFields = styled(FormField)``;

export const FormikTextareaNoErrorFields: FunctionComponent<FormikTextareaNoErrorFieldsProps> = ({ ...props }) => {
  const [field] = useField(props);
  const { backgroundColor, hasBorder, minHeight, onKeyDown, onKeyUp, placeholder, type: inputType } = props;

  return (
    <StyledFormikTextareaNoErrorFields>
      <Textarea
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
    </StyledFormikTextareaNoErrorFields>
  );
};
