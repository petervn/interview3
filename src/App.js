import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Titanic",
      isReleased: true
    };
  }

  toogleRelease = () => {
    console.log("toogleRelease");
    this.setState((prevState) => ({
      isReleased: !prevState.isReleased
    }));
  };

  render() {
    const { title, isReleased } = this.state;
    return (
      <>
        <MovieTitle title={title} />
        <h1>Movie is released: {isReleased ? "yes" : "no"} </h1>
        <button onClick={this.toogleRelease}>Toogle Release</button>
      </>
    );
  }
}

class MovieTitle extends React.Component {
  render() {
    console.log("MovieTitle is rendered");
    return <h1>Movie title {this.props.title} </h1>;
  }
}
