import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    // NEVER UPDATE STATE VARIABLES DIRECTLY
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };

    // console.log(this.props.name + "child constructor");
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("child component Did Mount");
    const data = await fetch("https://api.github.com/users/jagroop5");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    // console.log(this.props.name + "child component Did Mount");
  }

  // // below both code do the same work
  // useEffect( () => {
  // //  code
  // }, [count, count2] )

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.state.count !== prevState.count ||
  //     this.state.count2 !== prevState.count2
  //   ) {
  //     // code
  //   }
  //   console.log("child component did update");
  // }

  // below both code do the same work
  //   useEffect( () => {
  // // code
  //   }, [count] )

  //   useEffect( () => {
  // // code
  //   }, [count2] )

  //   componentDidUpdate(prevProps, prevState) {
  //     if (
  //       this.state.count !== prevState.count     ) {
  //       // code
  //     }
  //     if (
  //       this.state.count2 !== prevState.count2
  //     ) {
  //       // code
  //     }
  //     console.log("child component did update");
  //   }

  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     console.log("hello world");
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   console.log("child component unmount");
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("hello world");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  // Can write this
  //  async componentDidMount() {
  //   // code
  // }

  // Don't do this
  // useEffect(async () => {
  //   // code
  // }, [])

  // Can do this
  // useEffect(() => {
  //   async function fetchData() {}
  //   fetchData();
  // }, [])

  componentWillUnmount() {
    console.log("child component unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + "child render");
    console.log("Child render");
    // debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9989898989</h4>
      </div>
    );
  }
}

/* 

parent constructor
parent render
  Firstchild constructor
  Firstchild render
  Secondchild constructor
  Secondchild render
  Firstchild component Did Mount
  Secondchild component Did Mount
parent component Did Mount

------- MOUNTING -----------

Constructor(dummy)
Render(dummy)
    <HTML DUMMY>
Component Did Mount
    <API CALL>
    <this.setState> -> State variable is updated

------- UPDATE -----------

     render(API data)
     <HTML (new API data)>)
componentDid Update

componentWillUnmount

*/

export default UserClass;
