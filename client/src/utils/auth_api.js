export const getMe = token => {
  return fetch('/user/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  });
}

export const createUser = (userData) => {
  return fetch('/user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};