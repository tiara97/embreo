import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const globalStore = createStore(rootReducers, {}, applyMiddleware(thunk));
globalStore.subscribe(() =>
  console.log("Global Store : ", globalStore.getState())
);

root.render(
  <Provider store={globalStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
