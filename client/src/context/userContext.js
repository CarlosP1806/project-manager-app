import React, { useContext, useEffect, useState } from 'react';
import Auth from '../utils/auth';
import {getMe } from '../utils/auth_api';

const UserDataContext = React.createContext();

export function useUserData() {
  return useContext(UserDataContext);
}

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  const getUserData = async () => {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      if (!token) {
        return false;
      }
      setLoadingUser(true);
      const response = await getMe(token);
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const user = await response.json();
      setUserData(user);
      setLoadingUser(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <UserDataContext.Provider value={{ loadingUser, userData }}>
      {children}
    </UserDataContext.Provider>
  );
}