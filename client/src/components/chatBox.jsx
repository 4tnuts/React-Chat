import React, { Component } from "react";
import ChatForm from "./chatForm";
import ChatList from "./chatList";
import axios from "axios";
import io from "socket.io-client";

const request = axios.create({
  baseURL: "http://localhost:4000/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

const socket = io("http://localhost:4000");

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = { chats: [] };
    this.sendChat = this.sendChat.bind(this);
    this.loadChat = this.loadChat.bind(this);
    this.deleteChat = this.deleteChat.bind(this);
  }

  componentDidMount() {
    this.loadChat();
    socket.on("loadChat", data => {
      this.loadChat();
    });
  }

  loadChat() {
    request
      .get("chats")
      .then(response => {
        this.setState({
          chats: response.data
        });
      })
      .catch(err => {
        console.log("error : ", err);
      });
  }
  sendChat(dataChat) {
    this.setState(prevState => ({
      chats: [...prevState.chats, dataChat]
    }));
    request
      .post("chats", {
        id: dataChat._id,
        name: dataChat.name,
        message: dataChat.message
      })
      .then(response => {
        socket.emit("sendChat", null);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteChat(id) {
    this.setState(prevState => ({
      chats: prevState.chats.filter(chat => chat._id !== id)
    }));
    request
      .delete(`chats/${id}`)
      .then(response => {})
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="chat_window overflow-auto">
          <div className="top_menu">
            <div className="buttons">
              <div className="button close"></div>
              <div className="button minimize"></div>
              <div className="button maximize"></div>
            </div>
            <div className="title">React Chat</div>
          </div>
          <ul className="messages">
            <ChatList
              chatData={[...this.state.chats]}
              delete={this.deleteChat}
            />
          </ul>
          <ChatForm addChat={this.sendChat} />
        </div>
      </div>
    );
  }
}

export default ChatBox;
