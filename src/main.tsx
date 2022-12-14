import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

type ColorProps = {
  color: string;
  email: string;
  name: string;
};

export const ColorContext = createContext({} as ColorProps);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ColorContext.Provider
    value={{
      color: "blue",
      email: "walberson.mv@gmail.com",
      name: "Walberson Dias",
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ColorContext.Provider>
);
