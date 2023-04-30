import React, { FunctionComponent, useRef } from "react";
import { useField, FieldHookConfig } from "formik";
import styled from "styled-components";

import {
  ANIMATION_DURATIONS,
  FONT_SIZES,
  FONTS,
  FormField,
  FormFieldLabel,
  StyledFormFieldHint,
  FormFieldTag,
  SPACING,
  TextareaProps,
} from "@cleaved/ui";

type PostFormFormikTextareaProps = FieldHookConfig<any> &
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
  border: none;
  color: ${({ theme }) => theme.colors.baseText_color};
  font-family: ${FONTS.SANS_SERIF_1};
  font-size: ${FONT_SIZES.MEDIUM};
  min-height: 200px;
  outline: none;
  padding: ${SPACING.MEDIUM} 0;
  resize: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.basePlaceholderText_color};
    transition: color ${ANIMATION_DURATIONS.FAST} ease;
  }
`;

const StyledFormikTextarea = styled(FormField)``;

export const PostFormFormikTextarea: FunctionComponent<PostFormFormikTextareaProps> = ({
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
  const showFieldLabel = !hideLabel;
  const showFieldTag = !!tag;
  const showFieldHint = !!hint && !hasError;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <StyledFormikTextarea hasError={hasError}>
      {showFieldLabel && (
        <FormFieldLabel>
          {label}
          {showFieldTag && <FormFieldTag> ({tag})</FormFieldTag>}
        </FormFieldLabel>
      )}
      <StyledTextarea
        {...rest}
        autoFocus={true}
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
    </StyledFormikTextarea>
  );
};
