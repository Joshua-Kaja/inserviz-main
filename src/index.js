import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

import {
  createBrowserRouter,
  RouterProvider,
  Router,
  BrowserRouter
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);


// reportWebVitals();

// // const router = createBrowserRouter([
// //   {
// //     path:'/',
// //     element: <App/>,
// //   },
// //   {
// //     path: 'finance',
// //     element:<App/>,
// //   },

// // ])
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //     <RouterProvider router={router} />
// // );
// // reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import Account from './components/Account';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path:"account",
//     element:<Account/>,
//   },

// ]);




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <RouterProvider router={router} />
// );
// reportWebVitals();
