import { gql } from "@apollo/client";

export const SEEK_ACCOUNT_QUERY = gql`
  query seekAccount($filter: SearchFilter, $pageSize: Int, $searchTerm: String!, $seekKey: ID) {
    seekAccount(filter: $filter, pageSize: $pageSize, searchTerm: $searchTerm, seekKey: $seekKey) {
      currentAvatar
      firstName
      id
      lastName
    }
  }
`;
