import React, { FunctionComponent, TextareaHTMLAttributes, useRef } from "react";
import styled from "styled-components";
import { ANIMATION_DURATIONS, BORDERS, FONT_SIZES, FONTS, RADIUS, SPACING, TEXTAREA_MAX_HEIGHT } from "../../theme";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> | any;

type TextareaWrapperProps = {
  backgroundColor?: string;
  hasBorder?: boolean;
  minHeight?: string;
};

export const TextareaWrapper = styled.div<TextareaWrapperProps>`
  ${(props) => (props.backgroundColor ? `background-color: ${props.backgroundColor}` : null)};
  border: ${(props) => (props.hasBorder ? `${BORDERS.SOLID_1PX}` : "none")};
  border-radius: ${RADIUS.MEDIUM};

  > * + * {
    margin-left: ${SPACING.SMALL};
  }

  > textarea {
    background-color: transparent;
    border: none;
    font-family: ${FONTS.SANS_SERIF_1};
    font-size: ${FONT_SIZES.MEDIUM};
    min-height: ${(props) => (props.minHeight ? props.minHeight : TEXTAREA_MAX_HEIGHT)};
    outline: none;
    padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
    resize: none;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.basePlaceholderText_color};
      transition: color ${ANIMATION_DURATIONS.FAST} ease;
    }
  }
`;

export const Textarea: FunctionComponent<TextareaProps> = (props) => {
  const { autoFocus, backgroundColor, hasBorder, minHeight, onKeyPress, onKeyUp, ...rest } = props;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  /* eslint-disable */
  return (
    <TextareaWrapper backgroundColor={backgroundColor} hasBorder={hasBorder} minHeight={minHeight}>
      <textarea {...rest} autoFocus={autoFocus} onKeyPress={onKeyPress} onKeyUp={onKeyUp} ref={textAreaRef} rows={1} />
    </TextareaWrapper>
  );
};
