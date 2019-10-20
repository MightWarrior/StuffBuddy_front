const customFetch = (url, options) => fetch(`/${url}`, options)
  .then((res) => {
    if (!res.ok) {
      return Promise.reject;
    }
    return res.json();
  })
  .then((res) => res);

export const login = (url, user) => {
  customFetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const register = (url, user) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const logout = (url) => customFetch(url);
