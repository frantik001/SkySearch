import React from "react";
import render from "react-dom/client";
import App from "./components/app/app";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./globalstyles";

const root = render.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
