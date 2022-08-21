import { Component } from "react";

class Title extends Component {
  constructor(props) {
    super();
  }
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
export default Title;
