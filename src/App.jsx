import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('https://api.github.com/users');
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <>
      <section>
        {users.map((user) => (

          <div className="profile-container">
            <img src={user.avatar_url} alt="" className="profile-avatar" />

            <div className="username-link-container">
              <a href={user.html_url} className="profile-username">{user.login}</a>
              <p className="followers">{user.id}</p>
            </div>

          </div>
        ))}
      </section>
    </>
  );
}

export default App;
