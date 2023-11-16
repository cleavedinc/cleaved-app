import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { useOrganizationListAdmin } from "../../hooks";

import { OrganizationCard } from "./components";

const StyledProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const OrganizationsDataWrapper: FunctionComponent = () => {
  const { data, loading, refetch } = useOrganizationListAdmin();

  return (
    <>
      <StyledProjectCardWrapper>
        {!loading &&
          data &&
          data?.organizationListAdmin &&
          data?.organizationListAdmin.length > 0 &&
          data?.organizationListAdmin.map((organization) => {
            return <OrganizationCard key={organization.id} organization={organization} refetchData={refetch} />;
          })}
      </StyledProjectCardWrapper>
    </>
  );
};
