import React, { Component } from "react";

export default class Form1 extends Component {
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
    // console.log(this.state.user);
    // this.setState({ showUser: true });
    let users = this.state.users;
    users.push(this.state.user);
    this.setState({ users });
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
            Get
          </button>
        </form>
        <hr />
        {/* {showUser && (
          <div>
            <p>User First Name : {this.state.user.fname}</p>
            <p>User Last Name : {this.state.user.lname}</p>
          </div>
        )} */}

        <div>
          <table border="1">
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
            </thead>
            <tbody>
              {this.state.users.map((user) => {
                return (
                  <tr>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
