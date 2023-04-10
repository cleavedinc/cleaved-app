import InputMask from "react-input-mask";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { ANIMATION_DURATIONS, BORDERS, COLORS, FONT_SIZES, RADIUS, SPACING } from "../../theme";

export type TextboxProps = Pick<
  JSX.IntrinsicElements["input"],
  | "aria-label"
  | "name"
  | "onBlur"
  | "onChange"
  | "onClick"
  | "onInput"
  | "onKeyPress"
  | "onFocus"
  | "placeholder"
  | "readOnly"
  | "type"
  | "value"
> & {
  autoComplete?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  mask?: string;
  renderLeft?: () => React.ReactNode;
  renderRight?: () => React.ReactNode;
};

export const TextboxWrapper = styled.div`
  background-color: ${COLORS.WHITE};
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.MEDIUM};
  display: flex;
  font-size: ${FONT_SIZES.SMALL};
  overflow: hidden; /* cuz chrome autofilled input clashes with wrapper border */

  > * + * {
    margin-left: ${SPACING.SMALL};
  }

  > input {
    background-color: transparent;
    border: none;
    flex: 1 1 auto;
    font-size: inherit;
    outline: none;
    padding: ${SPACING.MEDIUM_SMALL} ${SPACING.MEDIUM};
    width: 100%;

    &::placeholder {
      color: ${COLORS.GRAY_500};
      transition: color ${ANIMATION_DURATIONS.FAST} ease;
    }
  }
`;

export const Textbox: FunctionComponent<TextboxProps> = ({
  "aria-label": ariaLabel,
  autoComplete,
  inputRef,
  mask,
  name,
  onBlur,
  onChange,
  onClick,
  onInput,
  onFocus,
  onKeyPress,
  placeholder,
  readOnly,
  renderLeft,
  renderRight,
  type,
  value,
}) => {
  const inputAutoComplete = autoComplete ? "on" : "new-password"; // disables chrome auto complete

  return (
    <TextboxWrapper>
      {renderLeft && renderLeft()}
      {typeof mask === "undefined" ? (
        <input
          aria-label={ariaLabel}
          autoComplete={inputAutoComplete}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
          onInput={onInput}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={inputRef}
          type={type}
          value={value}
        />
      ) : (
        <InputMask
          aria-label={ariaLabel}
          autoComplete={inputAutoComplete}
          inputRef={inputRef}
          mask={mask}
          maskChar="_"
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
          onInput={onInput}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          value={value}
        />
      )}
      {renderRight && renderRight()}
    </TextboxWrapper>
  );
};

Textbox.defaultProps = {
  autoComplete: true,
  readOnly: false,
  type: "text",
};
