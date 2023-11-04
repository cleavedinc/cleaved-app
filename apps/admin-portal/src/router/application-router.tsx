import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import { mediaQueries } from "@cleaved/ui";

import { Home } from "../pages/home/home";
import { HomeRouting } from "../pages/home/home-routing";
import { Login } from "../pages/login/login";
import { routeConstantsCleavedApp } from "../router";

import { PageProtector } from "./page-protector";

const StyledRouter = styled(Router)`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${mediaQueries.SM} {
    padding: 0;
  }
`;

export const ApplicationRouter: FunctionComponent = () => (
  <StyledRouter primary={false}>
    <PageProtector default path={`${routeConstantsCleavedApp.homeRouting.route}`} renderedPage={<HomeRouting />} />

    <PageProtector path={`${routeConstantsCleavedApp.home.route}`} renderedPage={<Home />} />

    <PageProtector path={routeConstantsCleavedApp.login.route} renderedPage={<Login />} isNotProtected />
  </StyledRouter>
);
