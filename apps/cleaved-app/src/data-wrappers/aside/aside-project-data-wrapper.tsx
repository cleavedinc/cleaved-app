import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { WidgetProjectDetailsDataWrapper } from "../widgets";

export const AsideProjectDataWrapper: FunctionComponent = () => {
  return (
    <StickUnderHeaderDesktopOnly>
      <WidgetProjectDetailsDataWrapper />
    </StickUnderHeaderDesktopOnly>
  );
};
