import { gql, useMutation } from '@apollo/client';

const USER_SIGNUP_MUTATION = gql`
  mutation UserCreate($data: UserCreateInput!) {
    userCreate(data: $data) {
      createdAt
      updatedAt
      _id
      name
      email
      status
    }
  }
`;

export type UseUserSingUpResult = {
  userLogin: {
    token: string;
  };
};

export type UseUserSingUpParams = {
  data: {
    name: string;
    email: string;
    password: string;
  };
};

export const useUserSingUp = () =>
  useMutation<UseUserSingUpResult, UseUserSingUpParams>(USER_SIGNUP_MUTATION);
