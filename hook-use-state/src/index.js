import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ShowContentApp from './apps/ShowContentApp';
import Example from './apps/Example';
import Count from './apps/Count';
import Selector from './apps/Selector';
import StudentManagement from './apps/StudentManagement';
import Timer from './apps/Timer';
import Car from './apps/Car';
import GPT from './apps/GPT';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ShowContentApp/> */}
    {/* <Count/> */}
    {/* <Selector/> */}
    {/* <Example/> */}
    {/* <StudentManagement/> */}
    {/* <Timer/> */}
    {/* <Car/> */}
    <GPT/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
