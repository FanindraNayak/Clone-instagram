import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css"
import { Button, ButtonGroup } from "@chakra-ui/react"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Login " + userData.username + " " + userData.password);
  };
  render() {
    return (
      <div className="loginForm">
            <h1>Login</h1>
            <form>
              <div className="group">
                
                <input
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>

              <div className="group">
                
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
            </form>
            <Button colorScheme="teal" onClick={this.onLoginClick} variant="outline">Login</Button>
            <p className="mt-2">
              Don't have account? <Link to="/signup">Signup</Link>
            </p>
      </div>
    );
  }
}

export default Login;
