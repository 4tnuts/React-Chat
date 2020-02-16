import React, { Component } from "react";
import MessageBox from "./MessageBox";

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ramma",
      message: "Halo kawan"
    };
  }

  render() {
    return <MessageBox chatData={{name : this.state.name, message :this.state.message}} />;
  }
}

export default ChatBox;
