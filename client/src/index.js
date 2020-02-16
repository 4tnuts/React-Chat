import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ChatBox from'./components/ChatBox';
import * as serviceWorker from './serviceWorker';

 ReactDOM.render(<ChatBox />, document.getElementById("root"));
 serviceWorker.unregister();