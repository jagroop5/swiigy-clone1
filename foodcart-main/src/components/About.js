import React from "react";
import User from "./User";
import UserClass from "./UserClass";

import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component Did Mount");
  }

  render() {
    console.log("parent render");

    return (
      <div>
        This is About Page
        <UserContext.Consumer>
          {(value) => {
            return <h1 className="text-xl font-bold">{value.loggedInUser}</h1>;
          }}
        </UserContext.Consumer>
        {/* <User name={"Digpal"} location={"Bengaluru (function)"} /> */}
        <UserClass />
        {/* <UserClass name={"First"} location={"Bengaluru (class)"} />
        <UserClass name={"Second"} location={"Bengaluru (class)"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       This is About Page
//       {/* <User name={"Digpal"} location={"Bengaluru (function)"} /> */}
//       <UserClass name={"Digpal"} location={"Bengaluru (class)"} />
//     </div>
//   );
// };

export default About;
