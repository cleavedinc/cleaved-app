import React, { FunctionComponent } from "react";

import { Box, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AccountPageMenu } from "../../components";

export const AsideAccountDataWrapper: FunctionComponent = () => {
  return (
    <>
      <StickUnderHeaderDesktopOnly>
        <Box>
          <AccountPageMenu />
        </Box>
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
