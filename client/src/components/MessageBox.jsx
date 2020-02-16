import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

function MessageBox(props) {
  let { name, message } = props.chatData;
  return (
    <div className="col-2 rounded-pill">
      <div className="shadow bg-light border border-primary">
        <span className="badge-primary">{name}</span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default MessageBox;
