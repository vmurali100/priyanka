import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1468,
          email: "KKnight@facilisis.org",
          username: "GGonshor",
          password: "o0poV",
        },
        {
          id: 1469,
          email: "CGlynn@dolor.gov",
          username: "TAnastasiades",
          password: "sF8Az",
        },
        {
          id: 1470,
          email: "CPlunkett@tellus.gov",
          username: "KReeder",
          password: "SH6G9",
        },
        {
          id: 1471,
          email: "LKatz@nec.ly",
          username: "DPachler",
          password: "h6YQs",
        },
        {
          id: 1472,
          email: "RGardner@sapien.gov",
          username: "MDeno",
          password: "u7Dkd",
        },
        {
          id: 1473,
          email: "MTobin@nec.org",
          username: "CMatros",
          password: "DRT4m",
        },
        {
          id: 1474,
          email: "POshins@dui.org",
          username: "VHarrington",
          password: "7tyw1",
        },
        {
          id: 1475,
          email: "PSolomon@consectetur.net",
          username: "AMcwethy",
          password: "8Rak4",
        },
        {
          id: 1476,
          email: "AHostetler@tincidunt.io",
          username: "RNutter",
          password: "gKNMr",
        },
        {
          id: 1477,
          email: "ATuggle@vitae.gov",
          username: "RBrady",
          password: "V3o9r",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, i) => {
            return <li key={i}>{user.username}</li>;
          })}
        </ul>
      </div>
    );
  }
}
