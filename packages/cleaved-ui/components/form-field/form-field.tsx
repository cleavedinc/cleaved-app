import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

import { TextboxWrapper } from "../textbox";

type FormFieldProps = {
  children: ReactNode;
  className?: string;
  fieldId?: string;
  hasError?: boolean;
};

const FormFieldWrapper = styled.label`
  display: flex;
  flex-direction: column;

  &[data-error="true"] {
    ${TextboxWrapper},
  }
`;

export const FormField: FunctionComponent<FormFieldProps> = ({ children, className, fieldId, hasError }) => (
  <FormFieldWrapper className={className} htmlFor={fieldId} data-error={hasError}>
    {children}
  </FormFieldWrapper>
);
