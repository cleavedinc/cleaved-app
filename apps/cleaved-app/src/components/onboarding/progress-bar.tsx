import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";

import { CheckIcon, FONT_SIZES, SPACING } from "@cleaved/ui";

type ProgressBarProps = {
  activeStep: number;
};

const StyledMainProgressContainer = styled.div`
  margin: 0 auto ${SPACING.XXXLARGE};
  width: 100%;
`;

type StyledStepContainerProps = {
  width: string;
};

const StyledStepContainer = styled.div<StyledStepContainerProps>`
  display: flex;
  justify-content: space-between;
  position: relative;

  :before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.baseBordersAndShadows_color};
    height: 3px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  :after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.baseLink_color};
    height: 3px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StyledStepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

type StyledStepProps = {
  step: string;
};

const StyledStep = styled.div<StyledStepProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  border: 2px solid
    ${({ step }) =>
      step === "completed"
        ? ({ theme }) => theme.colors.baseLink_color
        : ({ theme }) => theme.colors.baseBordersAndShadows_color};
  color: ${({ step }) =>
    step === "completed" ? ({ theme }) => theme.colors.baseLink_color : ({ theme }) => theme.colors.baseSubText_color};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledStepCount = styled.span`
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledStepsLabelContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type StyledStepLabelProps = {
  step: string;
};

const StyledStepLabel = styled.span<StyledStepLabelProps>`
  font-size: ${FONT_SIZES.SMALL};
  color: ${({ step }) =>
    step === "completed" ? ({ theme }) => theme.colors.baseLink_color : ({ theme }) => theme.colors.baseIcon_color};

  overflow-wrap: normal;
`;

export const ProgressBar: FunctionComponent<ProgressBarProps> = (props) => {
  const { activeStep } = props;
  const theme = useTheme();

  const progressBarSteps = [
    {
      label: "Org",
      step: 1,
    },
    {
      label: "Project",
      step: 2,
    },
    {
      label: "People",
      step: 3,
    },
  ];

  const totalSteps = progressBarSteps.length;
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <StyledMainProgressContainer>
      <StyledStepContainer width={width}>
        {progressBarSteps.map(({ step, label }) => (
          <StyledStepWrapper key={step}>
            <StyledStep step={activeStep >= step ? "completed" : "incomplete"}>
              {activeStep > step ? (
                <CheckIcon color={theme.colors.baseLink_color} iconSize={FONT_SIZES.SMALL} />
              ) : (
                <StyledStepCount>{step}</StyledStepCount>
              )}
            </StyledStep>

            <StyledStepsLabelContainer>
              <StyledStepLabel key={step} step={activeStep >= step ? "completed" : "incomplete"}>
                {label}
              </StyledStepLabel>
            </StyledStepsLabelContainer>
          </StyledStepWrapper>
        ))}
      </StyledStepContainer>
    </StyledMainProgressContainer>
  );
};
