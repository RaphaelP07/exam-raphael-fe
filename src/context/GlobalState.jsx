import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  users: null
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children, headers }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const baseURL = "https://exam-raphael-be.herokuapp.com";
  const apiURL = "https://exam-raphael-be.herokuapp.com/api/v1";

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
        apiURL: apiURL,
        setUsers
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
