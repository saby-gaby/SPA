import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "galymax",
        location: "Cologne",
        firstName: "Maxim",
        lastName: "Werkhowski",
      },
      loggedIn: false,
      changeUser: false,
    };

    // Alternative Methdode für's Binding von this
    //this.logIn = this.logIn.bind(this)
  }

  // Arrow function für automatisches Binding von this
  logIn = () => {
    this.setState({
      // nur das, was sich ändert
      loggedIn: !this.state.loggedIn,
    });
  };

  editUser = () => {
    this.setState({
      changeUser: !this.state.changeUser,
    });
  };

  handleChange = (userKey, event) => {
    this.setState((prevState) => {
      let user = Object.assign({}, prevState.user);
      user[userKey] = event.target.value;
      return { user };
    });
  };

  render() {
    return (
      <>
        {this.state.changeUser ? (
          <div>
            <h2>Change user</h2>
            <form onSubmit={this.editUser}>
              <input
                type="text"
                placeholder="Username"
                value={this.state.user.username}
                onChange={this.handleChange.bind(this, "username")}
              />
              <input
                type="text"
                placeholder="Location"
                value={this.state.user.location}
                onChange={this.handleChange.bind(this, "location")}
              />
              <input
                type="text"
                placeholder="First name"
                value={this.state.user.firstName}
                onChange={this.handleChange.bind(this, "firstName")}
              />
              <input
                type="text"
                placeholder="Last name"
                value={this.state.user.lastName}
                onChange={this.handleChange.bind(this, "lastName")}
              />
              <button>Save Changes</button>
            </form>
          </div>
        ) : (
          <div className="user">
            <div>Username: {this.state.user.username}</div>
            <div>Location: {this.state.user.location}</div>
            <div>
              Full Name: {this.state.user.firstName} {this.state.user.lastName}
            </div>
            <div>
              Login status:{" "}
              {this.state.loggedIn ? "logged in" : "not logged in"}
            </div>
            <div>
              <button onClick={this.logIn}>
                {this.state.loggedIn ? "Log Out" : "Log In"}
              </button>
              {this.state.loggedIn && (
                <button onClick={this.editUser}>Edit user</button>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}
