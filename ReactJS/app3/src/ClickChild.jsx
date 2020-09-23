import React from "react";
import { UserConsumer } from "./UserContext";
import RefsDemo from "./RefsDemo";

export const ClickChild = () => {
  return (
    <div>
      <UserConsumer>
        {(myName) => {
          return <h2>Value Received From Context : {myName}</h2>;
        }}
      </UserConsumer>
    </div>
  );
};
