import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const name = useParams().name;
  return (
    <div>
      <h1>
        Page for Product <span style={{ color: "red" }}>{name}</span>
      </h1>
    </div>
  );
};

export default ProductPage;
// import { useRouteError } from "react-router-dom";

// export default function ErrorPage() {
//   const error = useRouteError();
//   console.error(error);

//   return (
//     <div id="error-page">
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }
// export function About() {
//     return <h1>home</h1>
// }