import React from "react";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;

// export default function Home() {
//     return (
//       <>
//         <div id="sidebar">
//           <h1>This is my first try</h1>
//           <div>
//             <form id="search-form" role="search">
//               <input
//                 id="q"
//                 aria-label="Search contacts"
//                 placeholder="Search"
//                 type="search"
//                 name="search"
//               />
//               <div
//                 id="search-spinner"
//                 aria-hidden
//                 hidden={true}
//               />
//               <div
//                 className="sr-only"
//                 aria-live="polite"
//               ></div>
//             </form>
//             <form method="post">
//               <button type="submit">New</button>
//             </form>
//           </div>
//           <nav>
//             <ul>
//               <li>
//                 <a href={`/contacts/1`}>Home</a>
//               </li>
//               <li>
//                 <a href={`/contacts/2`}>About</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div id="detail"></div>
//       </>
//     );
//   }

// export function Home() {
//     return <h1>home</h1>
// }
