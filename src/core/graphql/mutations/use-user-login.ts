import { gql, useMutation } from '@apollo/client';

import { UserResponse } from '@core/types';

import { userInfoFragment } from '../fragments';

const USER_LOGIN_MUTATION = gql`
  mutation LoginUser($user: LoginUserInput!) {
    loginUser(User: $user) {
      token
      user {
        ...${userInfoFragment}
      }
    }
  }
`;

export type UseUserLoginOutput = {
  loginUser: {
    token: string;
    user: UserResponse;
  };
};

export type UseUserLoginInput = {
  user: { password: string; name: string };
};

export const useUserLogin = () =>
  useMutation<UseUserLoginOutput, UseUserLoginInput>(USER_LOGIN_MUTATION);
