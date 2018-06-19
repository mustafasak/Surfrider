import fetchIntercept from 'fetch-intercept';

import store from '../store';

const unregister = fetchIntercept.register({
  request: (url, config) => {
    const {
      user: {
        token
      }
    } = store.getState();

    const headersCopy = config && config.headers ? config.headers : {};

    return ([url, {
      ...config,
      headers: {
        ...headersCopy,
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }]);
  },

  response: (response) => {
    if (response.status === 403 || response.status === 401) {
      return Promise.reject(response);
    }

    return response;
  },

  responseError: (error) => (
    Promise.reject(error)
  ),
});

export default unregister;