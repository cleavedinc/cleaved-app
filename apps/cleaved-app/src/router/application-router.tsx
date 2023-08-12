import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import { routeConstantsShared } from "@cleaved/helpers";
import { mediaQueries } from "@cleaved/ui";

import { AccountOrganizationRegister } from "../pages/account/account-organization-register";
import { AccountProfessionalInformation } from "../pages/account/account-professional-information";
import { AccountOrganizations } from "../pages/account/account-organizations";
import { AccountMembership } from "../pages/account/account-membership";
import { Home } from "../pages/home";
import { ProfessionalShareLinkRegistration } from "../pages/professional/professional-share-link-registration";
import { Login } from "../pages/login/login";
import { PrivacyPolicy } from "../pages/agreements/privacy-policy";
import { Professional } from "../pages/professional/professional";
import { ProfessionalOnboarding } from "../pages/professional/professional-onboarding";
import { ProfessionalOnboardingHasOrganization } from "../pages/professional/professional-onboarding-has-organization";
import { Project } from "../pages/project/project";
import { ProjectList } from "../pages/project/project-list";
import { ProjectForm } from "../pages/project/project-form";
import { PeopleList } from "../pages/people/people-list";
import { PeopleListProfessionalInvite } from "../pages/professional/professional-invite";
import { TermsOfService } from "../pages/agreements/terms-of-service";
import { TermsOfServiceAgreement } from "../pages/agreements/terms-of-service-agreement";
import { routeConstantsCleavedApp } from "../router";

import { PageProtector } from "./page-protector";

const StyledRouter = styled(Router)`
  display: flex;
  flex: 1;

  ${mediaQueries.SM} {
    padding: 0;
  }
`;

export const ApplicationRouter: FunctionComponent = () => (
  <StyledRouter primary={false}>
    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountOrganizationRegister.route}`}
      renderedPage={<AccountOrganizationRegister />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountProfessionalInformation.route}`}
      renderedPage={<AccountProfessionalInformation />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountMembership.route}`}
      renderedPage={<AccountMembership />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.accountOrganizations.route}`}
      renderedPage={<AccountOrganizations />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.account.route}/:professionalId`}
      renderedPage={<Professional />}
    />

    <PageProtector path={`/:orgId${routeConstantsCleavedApp.home.route}`} renderedPage={<Home />} />

    <PageProtector
      path={routeConstantsCleavedApp.professionalOnboarding.route}
      renderedPage={<ProfessionalOnboarding />}
    />

    <PageProtector
      path={routeConstantsCleavedApp.professionalOnboardingHasOrganization.route}
      renderedPage={<ProfessionalOnboardingHasOrganization />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.project.route}/:projectId${routeConstantsCleavedApp.projectBoard.route}`}
      renderedPage={<Project />}
    />

    <PageProtector path={`:orgId${routeConstantsCleavedApp.projectList.route}`} renderedPage={<ProjectList />} />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.project.route}${routeConstantsCleavedApp.projectForm.route}`}
      renderedPage={<ProjectForm />}
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.project.route}/:projectId${routeConstantsCleavedApp.projectForm.route}`}
      renderedPage={<ProjectForm />}
    />

    <PageProtector path={`:orgId${routeConstantsCleavedApp.peopleList.route}`} renderedPage={<PeopleList />} />

    <PageProtector path={routeConstantsShared.privacyPolicy.route} renderedPage={<PrivacyPolicy />} isNotProtected />

    <PageProtector
      path={`${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/:shareLink`}
      renderedPage={<ProfessionalShareLinkRegistration />}
      isNotProtected
    />

    <PageProtector
      path={`:orgId${routeConstantsCleavedApp.professionalInvite.route}`}
      renderedPage={<PeopleListProfessionalInvite />}
    />

    <PageProtector path={routeConstantsShared.termsOfService.route} renderedPage={<TermsOfService />} isNotProtected />

    <PageProtector
      path={routeConstantsCleavedApp.termsOfServiceAgreement.route}
      renderedPage={<TermsOfServiceAgreement />}
      isNotProtected
    />

    <PageProtector default path={routeConstantsCleavedApp.login.route} renderedPage={<Login />} isNotProtected />
  </StyledRouter>
);
