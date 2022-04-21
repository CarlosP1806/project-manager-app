import React, { useEffect, useState } from 'react'
import { getMe } from '../../utils/auth_api';
import Auth from '../../utils/auth';

function DashboardView() {

  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
          return false;
        }
        const response = await getMe(token);
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
        const user = await response.json();
        setUserData(user);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, []);
  
  if (!Auth.loggedIn()) {
    window.location.assign("/");
    return;
  }

  if(loading) {
    return <>Loading...</>
  }

  return (
    <>
      <div>Hello, {userData.username}</div>
    </>
  )
}

export default DashboardView;