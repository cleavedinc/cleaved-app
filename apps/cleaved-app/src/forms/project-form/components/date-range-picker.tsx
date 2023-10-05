import React, { FunctionComponent, useState, useRef } from "react";
import styled, { useTheme } from "styled-components";

import { ArrowRightIcon, boxBase, ButtonSecondary, SPACING } from "@cleaved/ui";

import { Field, useFormikContext } from "formik";
import { format } from "date-fns";
import { enUS, es } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { usePopper } from "react-popper";
import FocusTrap from "focus-trap-react";

import { useTranslator } from "../../../hooks";

import { ProjectFormType } from "../types";

import "react-day-picker/dist/style.css";
import { t } from "i18next";

interface DateRangePickerProps {
  name: string;
}

const StyledArrowRightIcon = styled(ArrowRightIcon)`
  margin: 0 ${SPACING.SMALL};
`;

const StyledDayPicker = styled(DayPicker)`
  .rdp-button:focus-visible:not([disabled]),
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected),
  .rdp-dropdown:focus-visible:not([disabled]) + .rdp-caption_label {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }

  .rdp-day_selected,
  .rdp-day_selected:focus-visible,
  .rdp-day_selected:hover {
    background-color: ${({ theme }) => theme.colors.baseLink_color};
  }
`;

const StyledPopinWrapper = styled.div`
  ${boxBase}
  z-index: 10;
`;

export const DateRangePicker: FunctionComponent<DateRangePickerProps> = ({ name }) => {
  const { setFieldValue, values } = useFormikContext<ProjectFormType>();
  const projectStartDate =
    values && values?.projectStartDate && values?.projectStartDate?.from
      ? format(new Date(values.projectStartDate.from), "dd MMMM, yyyy")
      : null;

  const projectEndDate =
    values && values?.projectStartDate && values?.projectStartDate?.to
      ? format(new Date(values.projectStartDate.to), "dd MMMM, yyyy")
      : null;

  const { i18n } = useTranslator();
  const theme = useTheme();
  const currentlanguage = i18n.language;

  // popper
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const popper = usePopper(popperRef.current, popperElement, {
    placement: "bottom-start",
  });

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleButtonClick = () => {
    setIsPopperOpen(true);
  };
  /// end popper

  const handleCurrentlocale = (currentlanguageArg: string) => {
    switch (currentlanguageArg) {
      case "es":
        return es;
        break;
      case "en":
      default:
        return enUS;
    }
  };

  const handleDateSelect = (date: Date) => {
    setFieldValue(name, date);
  };

  return (
    <>
      <div ref={popperRef}>
        <ButtonSecondary
          ref={buttonRef}
          type="button"
          aria-label={t("projectForm.projectDate")}
          onClick={handleButtonClick}
        >
          {projectStartDate ? projectStartDate : t("projectForm.projectDateNotSet")}
          {projectEndDate && <StyledArrowRightIcon color={theme.colors.baseLink_color} />}
          {projectEndDate}
        </ButtonSecondary>
      </div>

      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            onDeactivate: closePopper,
            fallbackFocus: buttonRef.current || undefined,
          }}
        >
          <StyledPopinWrapper
            tabIndex={-1}
            style={popper.styles.popper}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
            aria-label={t("projectForm.calendar")}
          >
            <Field name={name}>
              {({ field }) => (
                <>
                  <StyledDayPicker
                    locale={handleCurrentlocale(currentlanguage)}
                    mode="range"
                    selected={field.value}
                    onSelect={(range) => {
                      field.onChange({ target: { name, value: range } });
                      setFieldValue(name, range);
                    }}
                    onDayClick={handleDateSelect}
                  />
                </>
              )}
            </Field>
          </StyledPopinWrapper>
        </FocusTrap>
      )}
    </>
  );
};
