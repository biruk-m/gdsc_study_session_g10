import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact.jsx";
import Signup from "./pages/signup.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/:name",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <div>This page is not Defined in main.jsx router</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import Home from "./pages/Home.jsx";
// import ErrorPage from "./pages/page.jsx";
// import Contact from "./pages/contact.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//     errorElement:<ErrorPage />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//      // <div>

//     //   Hello world!
//     // </div>,
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";
// // import App from './App.jsx'
// // import './index.css'
// // import { About } from './pages/About.jsx';
// // import { Home } from './pages/Home.jsx';

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Home />
// //   },
// //   {
// //     path: "/",
// //     element:<About />
// //   }
// // ]);

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <App />
// //     <RouterProvider router={router} />
// //   </React.StrictMode>,
// // )
