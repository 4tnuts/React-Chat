import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

let MessageBox = props => {
  return (
    <li style={{width: '100%'}}>
      <div className="msj macro">
        <div className="avatar">
          <small>Rama</small>
          <img className="img-circle" style={{width:'100%'}} alt="" src="https://i.ytimg.com/vi/bkTX1jweBTA/maxresdefault.jpg" />
        </div>
        <div class="text text-l">
          <p> AKU SUKA KAMUsdasdadoadkoadkoadkoaskdoakdoadkaokaosdkaodkaodkodkoakdoakd kod kasodkasodkaok oakd oaskdaoskd  </p>
          <p>
            <small>date</small>
          </p>
        </div>
      </div>
    </li>
  );
};

export default MessageBox;
