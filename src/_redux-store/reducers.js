import { actionTypes } from "./actionTypes";

export const initialState = {
  token: "",
  user: {},
  isLogin: false,
  loading: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case actionTypes.GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Sign Error",
      };
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return initialState;
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.SIGNUP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Sign Error",
      };
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        token: action.payload.authData.token,
        user: action.payload.authData.user,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "login error",
      };
    default:
      return state;
  }
};

export const initialTicketState = {
  ticket: {},
  tickets: [],
  isLoading: false,
  error: "",
  deleting: null,
  creating: null,
};
export const ticketReducer = (state = initialTicketState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TICKET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CREATE_TICKET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        creating: "fulfilled",
      };
    case actionTypes.CREATE_TICKET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Sign Error",
        creating: null,
      };
    case actionTypes.GET_TICKETS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_TICKETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tickets: action.payload.tickets,
      };
    case actionTypes.GET_TICKETS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Tickets Error",
      };
    case actionTypes.GET_TICKET_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_TICKET_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ticket: action.payload.ticket,
      };

    case actionTypes.UPDATE_TICKET_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: "update error",
      };

    case actionTypes.UPDATE_TICKET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ticket: action.payload.ticket,
      };

    case actionTypes.UPDATE_TICKET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "Update tickets error",
      };

    case actionTypes.CLOSED_TICKET_REQUEST: //Das ist gefragt....
      return {
        ...state,
        isLoading: true,
      };

    // eslint-disable-next-line no-duplicate-case
    case actionTypes.CLOSED_TICKET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ticket: action.payload.ticket,
      };

    case actionTypes.CLOSED_TICKET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "update tickets error",
      };

    case actionTypes.DELETE_TICKET_REQUEST: ///das auch
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.DELETE_TICKET_SUCCESS: ///das auch
      return {
        ...state,
        isLoading: false,
        deleting: "ticket_is_deleted",
      };
    case actionTypes.DELETE_TICKET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: "delete tickets error",
        deleting: null,
      };

    case actionTypes.UPDATE_PROPERTY:
      return {
        ...state,
        ...action.payload.property,
      };

    default:
      return state;
  }
};
