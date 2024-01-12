import { gql, useMutation } from '@apollo/client';

import { UserResponse } from '@core/types';

const USER_SIGNUP_MUTATION = gql`
  mutation SignUp($data: CreateUserInput!) {
    signUp(createUserInput: $data) {
      token
      user {
        email
        name
        status
        birthday
        _id
      }
    }
  }
`;

export type UseUserSingUpResult = {
  signUp: { token: string; user: UserResponse };
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
