import React, { FunctionComponent, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

import { FullWidth } from "@cleaved/ui";

import { SeekAccountQuery } from "../../generated-types/graphql";
import { useLoginGuard, useRouteParams, useTranslator } from "../../hooks";

import { SEEK_ACCOUNT_QUERY } from "./gql";

const StyledSearchResultsListWrapper = styled.ul``;

export const SearchResultsDataWrapper: FunctionComponent = () => {
  //   const { t } = useTranslator();
  const { isLoggedIn } = useLoginGuard();
  const searchParams = useRouteParams();
  const searchParamsValue = searchParams?.searchterm as string;
  const [searchTerm, setSearchTerm] = useState<string>(searchParamsValue);

  const { data, loading } = useQuery<SeekAccountQuery>(SEEK_ACCOUNT_QUERY, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data2) => {
      console.log("data2", data2);
    },
    onError: (error) => {
      console.log("error", error);
    },
    skip: !isLoggedIn && !searchTerm && searchTerm === "",
    variables: {
      searchTerm: searchTerm?.toLowerCase() || "",
    },
  });

  useEffect(() => {
    console.log("searchParams", searchParams);
    console.log("searchTerm", searchTerm);

    if (searchParamsValue !== searchTerm) {
      console.log("made it searchterm", searchParamsValue);
      setSearchTerm(searchParamsValue);
    }
  }, [searchParams]); // eslint-disable-line

  return (
    <FullWidth>
      Seach page
      {/* {loading && <LoadingDataText />} */}
      <StyledSearchResultsListWrapper>
        {/* {data?.seekAccount?.map((account: searchResultsDataWrapper_seekAccount) => {
          return (
            <StyledSearchListItem key={account.id}>
              <StyledPostHeader account={account} />
              <StyledProfileNetworkingDataWrapper professionalId={account.professionals[0].id} />
            </StyledSearchListItem>
          );
        })} */}

        {/* {data?.seekAccount?.length === 0 && (
          <EmptyStateNoContent
            icon={<EmojiMagnifyingGlassTiltedRight fontSize={FONT_SIZES.XXXLARGE} />}
            message={t("emptyState.noSearchResults")}
            messageFontSize={FONT_SIZES.XLARGE}
          />
        )} */}

        {/* {data?.seekAccount === undefined && (
          <EmptyStateNoContent
            icon={<EmojiMagnifyingGlassTiltedRight fontSize={FONT_SIZES.XXXLARGE} />}
            message={t("search.emptyMessage")}
            messageFontSize={FONT_SIZES.XLARGE}
          />
        )} */}
      </StyledSearchResultsListWrapper>
    </FullWidth>
  );
};
