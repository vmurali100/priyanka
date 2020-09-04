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
      isEdit: false,
      users: [],
      showUser: false,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.getAllUsers();
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
    axios
      .post("http://localhost:3000/users", this.state.user)
      .then((response) => {
        this.getAllUsers();
        this.clearUser();
      });
  };

  getAllUsers = () => {
    axios.get("http://localhost:3000/users").then((response) => {
      this.setState({ users: response.data });
    });
  };

  deleteUser = (user) => {
    console.log("deleteUser called");
    axios.delete("http://localhost:3000/users/" + user.id).then((resp) => {
      this.getAllUsers();
    });
  };

  clearUser = () => {
    let user = {
      fname: "",
      lname: "",
      id: "",
    };
    this.setState({ user });
  };

  editUser = (user) => {
    this.setState({ user, isEdit: true });
  };

  updateUser = () => {
    axios
      .put("http://localhost:3000/users/" + this.state.user.id, this.state.user)
      .then((res) => {
        this.getAllUsers();
        this.setState({ isEdit: false });
        this.clearUser();
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
          {!this.state.isEdit && (
            <button type="button" onClick={this.handleSubmit}>
              Add User
            </button>
          )}
          {this.state.isEdit && (
            <button type="button" onClick={this.updateUser}>
              Update User
            </button>
          )}
        </form>
        <hr />
        <br />
        {this.state.users.map((user) => {
          return (
            <div>
              <p>
                <span
                  onClick={() => {
                    this.editUser(user);
                  }}
                >
                  {user.fname}-{user.lname}
                </span>

                <span
                  className="delete"
                  onClick={() => {
                    this.deleteUser(user);
                  }}
                >
                  X
                </span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
