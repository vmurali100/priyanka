import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Register = (props) => {
  let history = useHistory();

  const handleSubmit = () => {
    console.log(history);
    // 1. Capute Values from Form
    // 2. POST Data to API
    // 3. Redirect The to Login Component
    history.push("/login");
  };
  return (
    <div>
      <h1>Welcome to Register component</h1>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="email" className="form-control" name="fullName" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
