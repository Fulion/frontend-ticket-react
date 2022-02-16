import React, { useContext, createContext, /* useReducer, useEffect */ } from "react";
/* import axios from "axios";
import { reducer, initialState } from "./reducer";
import * as lsHelpers from "../helpers/localStorageHelper"; */

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
/*   const [aState, aDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getStorage = lsHelpers.getItem();
    if (getStorage) {
      aDispatch({ type: "SET_STORE_ITEM", payload: getStorage });
    }
  }, []);

  const signUpHandler = async (user) => {
    aDispatch({ type: "REQUEST_SIGN_UP" });
    try {
      await axios.post("http://localhost:3001/v1/user/signup", user);
      aDispatch({ type: "SUCCESS_SIGN_UP" });
    } catch (error) {
      aDispatch({ type: "FAILED_SIGN_UP" });
    }
  };

  const loginHandler = async (email, password) => {
    aDispatch({ type: "REQUEST_LOGIN" });
    try {
      const response = await axios.post("http://localhost:3001/v1/user/login", {
        email,
        password,
      });
      aDispatch({ type: "SUCCESS_LOGIN", payload: response.data });
    } catch (error) {
      aDispatch({ type: "FAILED_LOGIN" });
    }
  };
  const logoutHandler = async () => {
    aDispatch({ type: "REQUEST_LOGOUT" });
    try {
      await axios.get("http://localhost:3001/v1/user/logout");
      aDispatch({ type: "SUCCESS_LOGOUT" });
    } catch (error) {
      aDispatch({ type: "SUCCESS_LOGOUT" });
    }
  };
  const getUserHandler = async () => {
    aDispatch({ type: "REQUEST_GET_USER" });
    try {
      const user = await axios.get("http://localhost:3001/v1/user");
      aDispatch({ type: "SUCCESS_GET_USER", payload: user.data });
    } catch (error) {
      aDispatch({ type: "FAILED_GET_USER" });
    }
  }; */

  const value = {
/*     reducer: aState,
    loginHandler,
    logoutHandler,
    signUpHandler,
    getUserHandler, */
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
