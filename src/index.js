import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import ToDoList from "../src/Lesson-5/index.jsx"
// import ToDoList from './Lesson-5/index.jsx';
// import './toDoList/style1.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
