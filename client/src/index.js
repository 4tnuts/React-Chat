import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from'./components/counter';
import registerServiceWorker from './registerServiceWorker';

 ReactDOM.render(<Counter />, document.getElementById("root"));
 registerServiceWorker();