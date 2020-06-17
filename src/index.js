// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { GlobalContextProvider } from "./utils/utils-context";

// import App from "./App";

// import * as serviceWorker from "./serviceWorker";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <GlobalContextProvider>
//     <BrowserRouter>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </BrowserRouter>
//   </GlobalContextProvider>,
//   rootElement
// );

// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./utils/utils-context";
//import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <GlobalContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </GlobalContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
