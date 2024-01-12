import { gql } from '@apollo/client';

export const userInfoFragment = gql`
  fragment UserFragment on User {
    email
    name
    status
    birthday
    _id
  }
`;
