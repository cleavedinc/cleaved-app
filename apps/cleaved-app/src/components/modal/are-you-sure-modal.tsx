import React, { Dispatch, FunctionComponent } from "react";
import styled from "styled-components";

import { ButtonPrimary, ButtonSecondary, Modal, SPACING } from "@cleaved/ui";

type AreYouSureModalProps = {
  areYouSureConfirmButtonText?: string;
  areYouSureRejectButtonText?: string;
  areYouSureDescription?: string;
  areYouSureTitle?: string;
  handleConfirmAction: (...args: any[]) => void; // eslint-disable-line
  isAreYouSureModalOpen: boolean;
  setIsAreYouSureModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const StyledActionWrapper = styled.div`
  display: flex;
  padding: ${SPACING.XXLARGE} 0 0;
`;

const StyledActionText = styled.div``;

const StyledButtonPrimary = styled(ButtonPrimary)`
  display: flex;
  margin-left: auto;
`;

export const AreYouSureModal: FunctionComponent<AreYouSureModalProps> = (props) => {
  const {
    areYouSureConfirmButtonText,
    areYouSureRejectButtonText,
    areYouSureDescription,
    areYouSureTitle,
    isAreYouSureModalOpen,
    setIsAreYouSureModalOpen,
    handleConfirmAction,
  } = props;

  return (
    <Modal
      open={isAreYouSureModalOpen}
      onCloseRequested={() => setIsAreYouSureModalOpen(false)}
      title={`${areYouSureTitle}`}
    >
      <StyledActionText>{areYouSureDescription}</StyledActionText>

      <StyledActionWrapper>
        <ButtonSecondary type="button" onClick={() => handleConfirmAction()}>
          {areYouSureConfirmButtonText}
        </ButtonSecondary>

        <StyledButtonPrimary type="button" onClick={() => setIsAreYouSureModalOpen(false)}>
          {areYouSureRejectButtonText}
        </StyledButtonPrimary>
      </StyledActionWrapper>
    </Modal>
  );
};
