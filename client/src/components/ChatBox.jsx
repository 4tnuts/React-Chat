import React, { Component } from "react";
import MessageBox from "./MessageBox";
import ChatForm from "./ChatForm";

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ramma",
      message: "Halo kawan"
    };
  }

  render() {
    return (
      <body>
        <div className="chat_window">
          <div className="top_menu">
            <div className="buttons">
              <div className="button close"></div>
              <div className="button minimize"></div>
              <div className="button maximize"></div>
            </div>
            <div className="title">React Chat</div>
          </div>
          <ul className="messages">
            <li className="message left appeared">
              <div className="avatar"></div>
              <div className="text_wrapper">
                <div className="text">booom</div>
              </div>
            </li>
          </ul>
          <div className="bottom_wrapper clearfix">
            <div className="message_input_wrapper">
              <input
                className="message_input"
                placeholder="Type your message here..."
              />
            </div>
            <div className="send_message">
              <div className="icon"></div>
              <div className="text">Send</div>
            </div>
            <div className="text-center mt-3">
              <small className="text-muted">
                template by sunithasundareswaran from https://bootsnipp.com/snippets/WaEvr
              </small>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default ChatBox;
