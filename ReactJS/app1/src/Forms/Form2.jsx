import React, { Component } from "react";
import axios from "axios";

export default class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        lname: "",
      },
      users: [],
      showUser: false,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    let user = Object.assign({}, this.state.user);
    user[name] = value;
    this.setState({ user });
    // this.setState({ myName: value });
  }

  //   handleSubmit() {
  //     console.log(this.state.user);
  //   }

  handleSubmit = () => {
    console.log(this.state.user);
    axios
      .post("http://localhost:3000/users", this.state.user)
      .then((response) => {
        this.getAllUsers();
      });
  };

  getAllUsers = () => {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response.data);
      this.setState({ users: response.data });
    });
  };

  render() {
    let { fname, lname } = this.state.user;
    let { showUser } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
          <br />
          <label htmlFor="lname">Last Name : </label>
          <input
            type="text"
            value={lname}
            name="lname"
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
          <button type="button" onClick={this.handleSubmit}>
            Add User
          </button>
        </form>
        <hr />
        <br />
        {this.state.users.map((user) => {
          return (
            <p>
              {user.fname}-{user.lname}
            </p>
          );
        })}
      </div>
    );
  }
}
