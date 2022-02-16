import * as lsHelpers from "../helpers/localStorageHelper";

export const initialState = {
  token: "",
  user: {},
  isLogin: false,
  loading: false,
  error: "",
};

export const reducer = (state, action) => {
  let currentState = { ...state };
  switch (action.type) {
    case "REQUEST_GET_USER":
      currentState = {
        ...state,
        isLoading: true,
      };
      return currentState;
    case "SUCCESS_GET_USER":
      currentState = {
        ...state,
        isLoading: false,
        user: action.payload,
      };
      lsHelpers.setItem(currentState);
      return currentState;
    case "FAILED_GET_USER":
      currentState = {
        ...state,
        isLoading: false,
        error: "Sign Error",
      };
      return currentState;
    case "REQUEST_LOGOUT":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_LOGOUT":
      lsHelpers.setItem(initialState);
      return initialState;
    case "REQUEST_SIGN_UP":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_SIGN_UP":
      return {
        ...state,
        isLoading: false,
      };
    case "FAILED_SIGN_UP":
      return {
        ...state,
        isLoading: false,
        error: "Sign Error",
      };
    case "REQUEST_LOGIN":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_LOGIN":
      currentState = {
        ...state,
        isLogin: true,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
      lsHelpers.setItem(currentState);
      return currentState;
    case "FAILED_LOGIN":
      return {
        ...state,
        isLoading: false,
        error: "login error",
      };
    case "SET_STORE_ITEM":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
};
