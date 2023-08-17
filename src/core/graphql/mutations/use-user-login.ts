import { gql, useMutation } from '@apollo/client';

const USER_LOGIN_MUTATION = gql`
  mutation UserLogin($password: String!, $userName: String!) {
    userLogin(password: $password, userName: $userName) {
      token
    }
  }
`;

export type UseUserLoginResult = {
  userLogin: {
    token: string;
  };
};

export type UseUserLoginParams = {
  password: string;
  userName: string;
};

export const useUserLogin = () =>
  useMutation<UseUserLoginResult, UseUserLoginParams>(USER_LOGIN_MUTATION);
