import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ChatBox from'./components/chatBox';
import * as serviceWorker from './serviceWorker';
import './index.css';

 ReactDOM.render(<ChatBox />, document.getElementById("root"));
 serviceWorker.unregister();