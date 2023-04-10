import React, { FunctionComponent } from "react";

import { routeConstantsShared } from "@cleaved/helpers";
import { Box, Link, Paragraph, SectionHeader } from "@cleaved/ui";

import { TermsOfServiceAgreementForm } from "../../forms";
import { useTranslator } from "../../hooks";

export const TermsOfServiceAgreementDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <Box>
      <SectionHeader>
        {t("companyName")} {t("termsOfService.agreementHeader")}
      </SectionHeader>

      <Paragraph>
        {t("termsOfService.firstParagraph")}{" "}
        <Link href={routeConstantsShared.termsOfService.route} target="_blank">
          {routeConstantsShared.termsOfService.name}
        </Link>
      </Paragraph>

      <TermsOfServiceAgreementForm />
    </Box>
  );
};
