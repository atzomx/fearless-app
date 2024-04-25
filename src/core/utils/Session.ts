import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'token';
const REFRESH_KEY = 'refreshToken';

const create = ({
  token,
  refreshToken,
}: {
  token: string;
  refreshToken: string;
}) =>
  Promise.all([
    AsyncStorage.setItem(TOKEN_KEY, token),
    AsyncStorage.setItem(REFRESH_KEY, refreshToken),
  ]);

const destroy = async () => {
  await Promise.all([
    AsyncStorage.removeItem(TOKEN_KEY),
    AsyncStorage.removeItem(REFRESH_KEY),
  ]);
};

const get = async () => {
  const [token, refreshToken] = await Promise.all([
    AsyncStorage.getItem(TOKEN_KEY),
    AsyncStorage.getItem(REFRESH_KEY),
  ]);
  return { token, refreshToken };
};

export default { create, destroy, get };
