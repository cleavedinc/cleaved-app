import React, { FunctionComponent, TextareaHTMLAttributes, useRef } from "react";
import styled from "styled-components";
import { ANIMATION_DURATIONS, BORDERS, FONT_SIZES, FONTS, RADIUS, SPACING, TEXTAREA_MAX_HEIGHT } from "../../theme";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> | any;

type TextareaWrapperProps = {
  backgroundColor?: string;
  className?: string;
  hasBorder?: boolean;
  minHeight?: string;
};

export const TextareaWrapper = styled.div<TextareaWrapperProps>`
  ${(props) => (props.backgroundColor ? `background-color: ${props.backgroundColor}` : null)};
  border: ${(props) => (props.hasBorder ? `${BORDERS.SOLID_1PX} ${props.theme.borders.primary_color}` : "none")};
  border-radius: ${RADIUS.MEDIUM};

  > * + * {
    margin-left: ${SPACING.SMALL};
  }

  > textarea {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.baseText_color};
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
  const { backgroundColor, className, hasBorder, minHeight, onKeyDown, onKeyUp, ...rest } = props;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  /* eslint-disable */
  return (
    <TextareaWrapper
      backgroundColor={backgroundColor}
      className={className}
      hasBorder={hasBorder}
      minHeight={minHeight}
    >
      <textarea {...rest} onKeyDown={onKeyDown} onKeyUp={onKeyUp} ref={textAreaRef} rows={1} />
    </TextareaWrapper>
  );
};
