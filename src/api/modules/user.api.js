import privateClient from '../client/private.client';
import publicClient from '../client/public.client';

const userEndpoints = {
  login: 'user/login',
  register: 'user/register',
  getInfo: 'user/about',
  passwordUpdate: 'user/update-password',
};

const userApi = {
  login: async ({ email, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.login, {
        email,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  register: async ({ email, password, confirmPassword }) => {
    try {
      const response = await publicClient.post(userEndpoints.register, {
        email,
        password,
        confirmPassword,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async ({ oldPassword, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.passwordUpdate, {
        oldPassword,
        newPassword,
        confirmNewPassword,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
