import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  users: ''
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children, headers }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const baseURL = "https://raphdev-stock-app-api.herokuapp.com";

  //Actions
  function setUsers(users) {
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        baseURL: baseURL,
        setUsers
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
