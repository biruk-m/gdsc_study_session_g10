import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
     <nav>
        <ul>
            <li>
                <h1>Home</h1> <br />
            </li>
            <li>
                <a href="/">Home</a><br />
           </li>
           <li>
                <a href="/product">Product (click me)</a><br />
            </li>
            <li>
                <a href="/signup">Signup</a><br />
            </li>
            <li>
                <a href="/contact">Contact</a><br />
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
    
  
  
  {/* ); */}
  <>
  <main>
      <h1>Welcome to the Home.</h1>
      <div id="sidebar">
                   <h1>This is my first try</h1>
          <div>
       <form id="search-form" role="search">
               <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="search"
                />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Home</a>
              </li>
              <li>
                <a href={`/contacts/2`}>About</a>
              </li>
            </ul>
          </nav>
        </div>
    </main>
    </>
    </>
  );
};



export default App;

{/* // // import { useState } from 'react'
// import {Route, Routes} from  "react-router-dom"
// import './App.css'
// import { Home } from "./pages/Home.jsx"
//  import { About } from "./pages/About.jsx"
// function App() { */}
{/* //   return(
// <>

 {/*    
    <ul>
      <li>
        <link to="/">Home</link>
      </li>
      <li>
        <link to="/About">About</link>
      </li>
    </ul> */}
{/* //   <Routes>
//     <Route path="/" element={<Home />}/>
//     <Route path="/About" element={<About />}/>
//   </Routes>
 
// </>
// ) 
// } */}
{/* 
// export default App */} 
