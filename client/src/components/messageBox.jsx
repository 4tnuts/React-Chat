import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

let MessageBox = props => {
  console.log("INI YNG ADA DI MESSAGEBOX", props);
  const { _id, name, message} = props.chat;
  console.log("INI ID", _id)
  console.log(props.chats)
  return (
    <li className="message left appeared">
      <a href="#" onClick={(event) => {props.remove(_id); event.preventDefault()}}><div
        className="avatar"
        style={{
          backgroundColor: "#" + ((Math.random() * 0xffffff) << 0).toString(16)
        }}
      ></div></a>
      <div className="text_wrapper ">
        <div className="text">
          <div>
      <small className="font-weight-bold nameTitle">{name}</small> 
          </div>
          {message}
        </div>
      </div>
    </li>
  );
};

export default MessageBox;
