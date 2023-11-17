import publicClient from '../client/public.client';

const actorEndpoints = {
  detail: ({ personId }) => `actor/${personId}`,
  media: ({ personId }) => `actor/${personId}/media`,
};

const actorApi = {
  detail: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        actorEndpoints.detail({ personId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  media: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        actorEndpoints.media({ personId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default actorApi;
