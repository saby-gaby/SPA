import React, { useState } from "react";

export default function UserFunc(props) {
  const [user, setUser] = useState({
    username: "galymax",
    location: "Cologne",
    firstName: "Maxim",
    lastName: "Werkhowski",
  });

  const [loggedIn, setLoggedIn] = useState(false);
    const [changeUser, setChangeUser] = useState(false);
    
    const logIn = () => {
        setLoggedIn(!loggedIn)
    }

    const editUser = () => {
        setChangeUser(!changeUser)
    }

    const handleChange = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    return (
      <div>
        <>
          {changeUser ? (
            <div>
              <h2>Change user</h2>
              <form onSubmit={editUser}>
                <input
                  type="text"
                  placeholder="Username"
                  value={user.username}
                  name="username"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={user.location}
                  name="location"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="First name"
                  value={user.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={user.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
                <button>Save Changes</button>
              </form>
            </div>
          ) : (
            <div className="user">
              <div>Username: {user.username}</div>
              <div>Location: {user.location}</div>
              <div>
                Full Name: {user.firstName} {user.lastName}
              </div>
              <div>
                Login status: {loggedIn ? "logged in" : "not logged in"}
              </div>
              <div>
                <button onClick={logIn}>
                  {loggedIn ? "Log Out" : "Log In"}
                </button>
                {loggedIn && <button onClick={editUser}>Edit user</button>}
              </div>
            </div>
          )}
        </>
      </div>
    );
}
