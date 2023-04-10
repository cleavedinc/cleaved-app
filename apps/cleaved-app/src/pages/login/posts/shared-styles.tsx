import styled from "styled-components";

import {
  BORDERS,
  Box,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  RADIUS,
  removeDefaultButtonStyles,
  SPACING,
  SPACING_PX,
} from "@cleaved/ui";

export const StyledAvatarImage = styled.img`
  align-items: center;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 30px;
  justify-content: center;
  margin-right: ${SPACING_PX.TWO};
  width: 30px;
`;

export const StyledAvatarImageLink = styled.a`
  color: ${COLORS.BLACK};
  height: max-content;
`;

export const PostHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.MEDIUM};
  padding-right: ${SPACING.LARGE};
`;

export const StyledJobTitle = styled.div`
  color: ${COLORS.GRAY_500};
`;

export const StyledMemberNameWrapper = styled.div``;

export const StyledMessage = styled.div`
  margin-bottom: ${SPACING.SMALL};
  overflow-wrap: anywhere;
  white-space: pre-line;
`;

export const StyledPostComments = styled.span`
  text-transform: lowercase;
`;

export const StyledPostInfoBar = styled.div`
  color: ${COLORS.GRAY_500};
  display: flex;
  font-size: ${FONT_SIZES.SMALL};
  padding-bottom: ${SPACING.SMALL};
`;

export const StyledPostFooter = styled.div`
  align-items: flex-start;
  border-top: ${BORDERS.BORDER_PRIMARY};
  display: flex;
  padding: 5px 0;
`;

export const StyledPostFooterButtonButton = styled.button`
  ${removeDefaultButtonStyles}
  align-items: center;
  border-radius: ${RADIUS.SMALL};
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  min-width: 100px;
  padding: ${SPACING_PX.ONE} ${SPACING_PX.FOUR};

  &:hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

export const StyledPostImage = styled.img`
  border: ${BORDERS.BORDER_PRIMARY};
  cursor: pointer;
  height: 100%;
  object-position: top left;
  object-fit: cover;
  width: 100%;
`;

export const StyledPostImageMultiple = styled.img`
  border: ${BORDERS.BORDER_PRIMARY};
  cursor: pointer;
  height: 75px;
  width: 75px;

  :not(:last-child) {
    margin-right: ${SPACING_PX.ONE};
  }
`;

export const StyledPostImageWrapper = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

export const StyledPostInfoBarCommentCount = styled.div`
  cursor: pointer;
  margin-left: auto;

  :hover {
    text-decoration: underline;
  }
`;

export const PostProfessionalName = styled.a`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${COLORS.BLUE_500_HOVER};
    text-decoration: underline;
  }
`;

export const StyledProjectPostBox = styled(Box)`
  padding-bottom: 0;
`;

export const StyledToolbarPostInfo = styled.div`
  font-size: ${FONT_SIZES.SMALL};
`;

export const StyledTooltipWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
`;
