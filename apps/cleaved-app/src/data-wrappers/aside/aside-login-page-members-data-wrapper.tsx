import React, { FunctionComponent } from "react";
import styled from "styled-components";

import {
  BORDERS,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  RADIUS,
  SPACING,
  SPACING_PX,
  StickUnderHeaderDesktopOnly,
} from "@cleaved/ui";

import { useTranslator } from "../../hooks";

const StyledAvatarImage = styled.img`
  align-items: center;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 30px;
  justify-content: center;
  margin-right: ${SPACING_PX.TWO};
  width: 30px;
`;

const StyledAvatarImageLink = styled.a`
  color: ${COLORS.BLACK};
  height: max-content;
`;

const StyledJobTitle = styled.div`
  color: ${COLORS.GRAY_500};
`;

const StyledPeopleList = styled.ul``;

const StyledPeopleListHeader = styled.div``;

const StyledPeopleListHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.SMALL};
`;

const StyledPeopleListItem = styled.li``;

const StyledMemberNameWrapper = styled.div``;

const StyledPostHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.MEDIUM};
  padding-right: ${SPACING.LARGE};
`;

const PostProfessionalName = styled.a`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${COLORS.BLUE_500_HOVER};
    text-decoration: underline;
  }
`;

export const AsideLoginPageMembersDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <StyledPeopleListHeaderWrapper>
        <StyledPeopleListHeader>{t("people.teamListHeader")}</StyledPeopleListHeader>
      </StyledPeopleListHeaderWrapper>

      <StyledPeopleList>
        <StyledPeopleListItem>
          <StyledPostHeaderWrapper>
            <StyledAvatarImageLink href="#">
              <StyledAvatarImage src={"/helper-info/avatars/avatar-female-3.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>Maya Patel</PostProfessionalName>
              <StyledJobTitle>UX Designer</StyledJobTitle>
            </StyledMemberNameWrapper>
          </StyledPostHeaderWrapper>

          <StyledPostHeaderWrapper>
            <StyledAvatarImageLink href="#">
              <StyledAvatarImage src={"/helper-info/avatars/avatar-male-1.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>Brandon Scott</PostProfessionalName>
              <StyledJobTitle>Engineering Manager</StyledJobTitle>
            </StyledMemberNameWrapper>
          </StyledPostHeaderWrapper>

          <StyledPostHeaderWrapper>
            <StyledAvatarImageLink href="#">
              <StyledAvatarImage src={"/helper-info/avatars/avatar-male-2.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>David Lee</PostProfessionalName>
              <StyledJobTitle>Senior Software Engineer</StyledJobTitle>
            </StyledMemberNameWrapper>
          </StyledPostHeaderWrapper>

          <StyledPostHeaderWrapper>
            <StyledAvatarImageLink href="#">
              <StyledAvatarImage src={"/helper-info/avatars/avatar-female-2.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>Olivia Johnson</PostProfessionalName>
              <StyledJobTitle>Director of Engineering</StyledJobTitle>
            </StyledMemberNameWrapper>
          </StyledPostHeaderWrapper>

          <StyledPostHeaderWrapper>
            <StyledAvatarImageLink href="#">
              <StyledAvatarImage src={"/helper-info/avatars/avatar-female-1.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>Samantha Kim</PostProfessionalName>
              <StyledJobTitle>Vice President of Product</StyledJobTitle>
            </StyledMemberNameWrapper>
          </StyledPostHeaderWrapper>

          <StyledPostHeaderWrapper>
            <StyledAvatarImageLink href="#">
              <StyledAvatarImage src={"/helper-info/avatars/avatar-male-4.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>Jeremy Slottje</PostProfessionalName>
              <StyledJobTitle>Founder</StyledJobTitle>
            </StyledMemberNameWrapper>
          </StyledPostHeaderWrapper>

          <StyledPostHeaderWrapper>
            <StyledAvatarImageLink href="#">
              <StyledAvatarImage src={"/helper-info/avatars/avatar-male-3.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>Chris Campbell</PostProfessionalName>
              <StyledJobTitle>Founder</StyledJobTitle>
            </StyledMemberNameWrapper>
          </StyledPostHeaderWrapper>
        </StyledPeopleListItem>
      </StyledPeopleList>
    </StickUnderHeaderDesktopOnly>
  );
};
