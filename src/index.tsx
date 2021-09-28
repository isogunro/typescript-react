import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as App from './App';
import * as  Plus from './Plus';
import * as  Minus from './Minus';
import * as  Divide from './Divide';
import * as  Multiply from './Multiply';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Plus />
    <Minus />
    <Divide />
    <Multiply />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
