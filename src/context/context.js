// context.js
import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const initialState = {
    token: "", // initial token value
    isLoggedIn: false, // initial login state
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TokenContext.Provider value={{ state, dispatch }}>
      {children}
    </TokenContext.Provider>
  );
};
