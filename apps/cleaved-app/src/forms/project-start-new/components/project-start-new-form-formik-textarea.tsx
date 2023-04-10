import React, { FunctionComponent, useRef } from "react";
import { useField, FieldHookConfig } from "formik";
import styled from "styled-components";

import {
  ANIMATION_DURATIONS,
  BORDERS,
  COLORS,
  FONT_SIZES,
  FONTS,
  FormField,
  StyledFormFieldError,
  StyledFormFieldHint,
  RADIUS,
  SPACING,
  TextareaProps,
} from "@cleaved/ui";

type ProjectStartNewFormFormikTextareaProps = FieldHookConfig<any> &
  TextareaProps & {
    backgroundColor?: string;
    hasBorder?: boolean;
    hideLabel?: boolean; // use placeholder & aria-label if true, exists for niche forms like "table row forms"
    hint?: React.ReactNode;
    label?: React.ReactNode;
    minHeight?: string;
    tag?: "optional" | "required";
  };

const StyledTextarea = styled.textarea`
  background-color: transparent;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.MEDIUM};
  font-family: ${FONTS.SANS_SERIF_1};
  font-size: ${FONT_SIZES.MEDIUM};
  min-height: 250px;
  outline: none;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  resize: none;
  width: 100%;

  &::placeholder {
    color: ${COLORS.GRAY_500};
    transition: color ${ANIMATION_DURATIONS.FAST} ease;
  }
`;

const StyledFormikTextarea = styled(FormField)``;

export const ProjectStartNewFormFormikTextarea: FunctionComponent<ProjectStartNewFormFormikTextareaProps> = ({
  hideLabel = false,
  ...props
}) => {
  const [field, { touched, error }] = useField(props);
  const {
    autoFocus,
    backgroundColor,
    hasBorder,
    hint,
    label,
    minHeight,
    onKeyPress,
    onKeyUp,
    placeholder,
    tag,
    type: inputType,
    ...rest
  } = props;
  const errorMessage = error && touched ? error : undefined;
  const hasError = errorMessage !== undefined;
  const ariaLabel = hideLabel && typeof label === "string" ? label : undefined;
  const showFieldHint = !!hint && !hasError;
  const showFieldError = hasError;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <StyledFormikTextarea hasError={hasError}>
      <StyledTextarea
        {...rest}
        autoFocus={false}
        aria-label={ariaLabel}
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        ref={textAreaRef}
        rows={1}
        type={"textarea"}
        value={field.value}
      />

      {showFieldHint && <StyledFormFieldHint>{hint}</StyledFormFieldHint>}
      <StyledFormFieldError>{showFieldError && errorMessage}</StyledFormFieldError>
    </StyledFormikTextarea>
  );
};
