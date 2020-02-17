import React, { Component } from "react";

class ChatForm extends Component {
  render() {
    return (
      <div>
        <div className="msj-rta macro">
          <div className="text text-r" style={{background:'whitesmoke !important'}}>
            <input className="mytext" placeholder="Type a message" />
          </div>
        </div>
        <div style={{padding : 10}}>
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    );
  }
}

export default ChatForm;
