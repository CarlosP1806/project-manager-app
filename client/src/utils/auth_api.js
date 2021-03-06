export const getMe = token => {
  return fetch('/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  });
}

export const createUser = (userData) => {
  return fetch('/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};