import React, {useState, useEffect} from 'react';
import './index.css';


function App(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    const getUsers = async () =>{
      const res = await fetch('https://api.github.com/users')
      const data = await res.json()
      setUsers(data)
      console.log(data)
    }
    getUsers()
  }, [])
  return (
    <>
      <section>
        <div>
          <img src="" alt="" />
          <h2 >username</h2>
          <a href="https://github.com/aegon78">Profile</a>
        </div>
      </section>
    </>
  )
}

export default App;
