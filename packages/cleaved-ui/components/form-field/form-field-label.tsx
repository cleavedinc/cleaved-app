import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

import { FONT_SIZES } from "../../theme";

type FormFieldLabelProps = {
  children: ReactNode;
  hidden?: boolean;
};

const FormFieldLabelWrapper = styled.span`
  font-size: ${FONT_SIZES.XSMALL};
  white-space: pre;
`;

export const FormFieldLabel: FunctionComponent<FormFieldLabelProps> = ({ children, hidden }) => {
  if (!children || hidden) {
    return null;
  }

  return <FormFieldLabelWrapper>{children}</FormFieldLabelWrapper>;
};
