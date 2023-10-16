import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  ButtonPrimary,
  FONT_SIZES,
  HeadingWrapper,
  RADIUS,
  SectionHeader,
  SPACING,
  SPACING_PX,
  Spinner,
} from "@cleaved/ui";

import { Social_Media_Type } from "../../generated-types/graphql";
import { useFindMyAccount, useTranslator } from "../../hooks";

import { SET_ACCOUNT_SOCIAL_MEDIA_LINKS_MUTATION } from "./gql";

type SocialNetworksFormType = {
  linkedinUrl?: string;
  xUrl?: string;
};

const StyledFormWrapper = styled.div``;

const StyledField = styled(Field)`
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
  outline: none;
  padding: ${SPACING.MEDIUM_SMALL} ${SPACING.MEDIUM};
  width: 100%;
`;

const StyledProjectFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProjectFormLabel = styled.label`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING_PX.ONE};
`;

const StyledSubmitButton = styled(ButtonPrimary)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-left: auto;
  margin-top: ${SPACING_PX.ONE};
`;

export const SocialNetworksForm: FunctionComponent = () => {
  const { t } = useTranslator();
  const { findMyAccountData, findMyAccountDataRefetch } = useFindMyAccount();

  const linkedinUrlPlaceholder = t("formLabels.linkedinUrlPlaceholder")
    ? t("formLabels.linkedinUrlPlaceholder")
    : undefined;

  const xUrlPlaceholder = t("formLabels.xUrlPlaceholder") ? t("formLabels.xUrlPlaceholder") : undefined;

  const [setAccountSocialMediaLinks] = useMutation(SET_ACCOUNT_SOCIAL_MEDIA_LINKS_MUTATION, {
    onCompleted: () => {
      if (findMyAccountDataRefetch) {
        findMyAccountDataRefetch();
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{
        linkedinUrl: findMyAccountData?.socialMedia?.linkedin || "",
        xUrl: findMyAccountData?.socialMedia?.twitter || "",
      }}
      onSubmit={(values: SocialNetworksFormType, { resetForm, setSubmitting }) => {
        setSubmitting(false);

        const linkedinUrl = values?.linkedinUrl?.length === 0 ? null : values.linkedinUrl;
        const XUrl = values?.xUrl?.length === 0 ? null : values.linkedinUrl;

        setAccountSocialMediaLinks({
          variables: {
            socialLinks: [{ link: linkedinUrl, media: Social_Media_Type.Linkedin }],
          },
        });

        setAccountSocialMediaLinks({
          variables: {
            socialLinks: [{ link: XUrl, media: Social_Media_Type.Twitter }],
          },
        });

        resetForm({ values });
      }}
      validationSchema={yup.object().shape<Record<keyof SocialNetworksFormType, yup.AnySchema>>({
        linkedinUrl: yup.string(),
        xUrl: yup.string(),
      })}
    >
      {({ dirty, isSubmitting, isValid }) => {
        return (
          <>
            <HeadingWrapper>
              <SectionHeader>{t("hTags.socialLinks")}</SectionHeader>
            </HeadingWrapper>

            <StyledFormWrapper>
              <Form>
                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="linkedinUrl">
                    {t("formLabels.linkedinUrlTitle")}
                  </StyledProjectFormLabel>

                  <StyledField id="linkedinUrl" name="linkedinUrl" placeholder={linkedinUrlPlaceholder} />
                </StyledProjectFormWrapper>

                <StyledProjectFormWrapper>
                  <StyledProjectFormLabel htmlFor="xUrl">{t("formLabels.xUrlTitle")}</StyledProjectFormLabel>

                  <StyledField id="xUrl" name="xUrl" placeholder={xUrlPlaceholder} />
                </StyledProjectFormWrapper>

                <StyledProjectFormWrapper>
                  <StyledSubmitButton disabled={!(isValid && dirty) || isSubmitting} type="submit">
                    {isSubmitting ? t("pleaseWaitDots") : t("account.save")}
                    <Spinner visible={isSubmitting} />
                  </StyledSubmitButton>
                </StyledProjectFormWrapper>
              </Form>
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
};
