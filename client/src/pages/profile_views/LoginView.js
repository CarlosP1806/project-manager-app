import React, { useState, useEffect } from 'react'
import { createUser, getMe } from '../../utils/auth_api';
import Auth from '../../utils/auth';

function LoginView() {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [userData, setUserData] = useState({});
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
          throw new Error('something went wrong');
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

  async function handleSignUp(event) {
    event.preventDefault();

    try {
      const response = await createUser({ username, email, password });
      if (!response.ok) {
        throw new Error('something went wrong');
      }
      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  }

  if(loading) {
    return (
      <>Loading...</>
    )
  }

  return (
    <>
      {Auth.loggedIn() ?
        (<p>Hi User: {userData.username}</p>)
        :
        (<p>Not logged</p>)}

      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username} />
        <input
          type="text"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
        <button>Login</button>
      </form>

      <h2>SignUp</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username} />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email} />
        <input
          type="text"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
        <button>SignUp</button>
      </form>
    </>
  )
}

export default LoginView;