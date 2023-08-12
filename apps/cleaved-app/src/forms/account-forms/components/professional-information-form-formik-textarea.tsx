import React, { FunctionComponent, useRef } from "react";
import { useField, FieldHookConfig } from "formik";
import styled from "styled-components";

import {
  ANIMATION_DURATIONS,
  BORDERS,
  FONT_SIZES,
  FONTS,
  FormField,
  StyledFormFieldError,
  StyledFormFieldHint,
  RADIUS,
  SPACING,
  TextareaProps,
} from "@cleaved/ui";

type ProfessionalInformationFormFormikTextareaProps = FieldHookConfig<any> &
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
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseText_color};
  font-family: ${FONTS.SANS_SERIF_1};
  font-size: ${FONT_SIZES.MEDIUM};
  min-height: 250px;
  outline: none;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.basePlaceholderText_color};
    transition: color ${ANIMATION_DURATIONS.FAST} ease;
  }
`;

const StyledFormikTextarea = styled(FormField)``;

export const ProfessionalInformationFormFormikTextarea: FunctionComponent<
  ProfessionalInformationFormFormikTextareaProps
> = ({ hideLabel = false, ...props }) => {
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
