import { actionTypes } from "./actionTypes";

export const authActions = {
  // Login
  loginRequest: (email, password) => {
    return {
      type: actionTypes.LOGIN_REQUEST,
      payload: { email, password },
    };
  },
  loginRequestSuccess: (authData) => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      payload: { authData },
    };
  },
  loginRequestFailed: (error) => {
    return {
      type: actionTypes.LOGIN_FAILED,
      payload: { error },
    };
  },
  // SignUp
  signUpRequest: (user) => {
    return {
      type: actionTypes.SIGNUP_REQUEST,
      payload: { user },
    };
  },
  signUpRequestSuccess: () => {
    return {
      type: actionTypes.SIGNUP_SUCCESS,
      payload: {},
    };
  },
  signUpRequestFailed: (error) => {
    return {
      type: actionTypes.SIGNUP_FAILED,
      payload: { error },
    };
  },
  // Logout
  logoutRequest: (token) => {
    return {
      type: actionTypes.LOGOUT_REQUEST,
      payload: { token },
    };
  },
  logoutRequestSuccess: () => {
    return {
      type: actionTypes.LOGOUT_SUCCESS,
      payload: {},
    };
  },
  logoutRequestFailed: (error) => {
    return {
      type: actionTypes.LOGOUT_FAILED,
      payload: { error },
    };
  },
  // user
  getUserRequest: (token) => {
    return {
      type: actionTypes.GET_USER_REQUEST,
      payload: { token },
    };
  },
  getUserRequestSuccess: (userData) => {
    return {
      type: actionTypes.GET_USER_SUCCESS,
      payload: { userData },
    };
  },
  getUserRequestFailed: (error) => {
    return {
      type: actionTypes.GET_USER_FAILED,
      payload: { error },
    };
  },
};

export const ticketActions = {
  // create
  createTicket: (ticket, token) => {
    return {
      type: actionTypes.CREATE_TICKET_REQUEST,
      payload: { ticket, token },
    };
  },
  createTicketSuccess: (response) => {
    return {
      type: actionTypes.CREATE_TICKET_SUCCESS,
      payload: { response },
    };
  },
  createTicketFailed: (error) => {
    return {
      type: actionTypes.CREATE_TICKET_FAILED,
      payload: { error },
    };
  },
  // update
  updateTicket: (ticket, ticketId, token) => {
    return {
      type: actionTypes.UPDATE_TICKET_REQUEST,
      payload: { ticket, ticketId, token },
    };
  },
  updateTicketSuccess: (ticket) => {
    return {
      type: actionTypes.UPDATE_TICKET_SUCCESS,
      payload: { ticket },
    };
  },
  updateTicketFailed: (error) => {
    return {
      type: actionTypes.UPDATE_TICKET_FAILED,
      payload: { error },
    };
  },

  //get tickets

  getTickets: (token) => {
    return {
      type: actionTypes.GET_TICKETS_REQUEST,
      payload: { token },
    };
  },
  getTicketsSuccess: (tickets) => {
    return {
      type: actionTypes.GET_TICKETS_SUCCESS,
      payload: { tickets },
    };
  },
  getTicketsFailed: (error) => {
    return {
      type: actionTypes.GET_TICKETS_FAILED,
      payload: { error },
    };
  },

  //get ticket by id

  getTicketById: (ticketId, token) => {
    return {
      type: actionTypes.GET_TICKET_BY_ID_REQUEST,
      payload: { ticketId, token },
    };
  },
  getTicketByIdSuccess: (ticket) => {
    return {
      type: actionTypes.GET_TICKET_BY_ID_SUCCESS,
      payload: { ticket },
    };
  },

  getTicketByIdFailed: (error) => {
    return {
      type: actionTypes.GET_TICKET_BY_ID_FAILED,
      payload: { error },
    };
  },

  //update status closed

  closedTicket: (ticketId, token) => {
    return {
      type: actionTypes.CLOSED_TICKET_REQUEST,
      payload: { ticketId, token },
    };
  },
  closedTicketSuccess: (ticket) => {
    return {
      type: actionTypes.CLOSED_TICKET_SUCCESS,
      payload: { ticket },
    };
  },
  closedTicketFailed: (error) => {
    return {
      type: actionTypes.CLOSED_TICKET_FAILED,
      payload: { error },
    };
  },

  //delete Tickets

  deleteTicket: (ticketId, token) => {
    return {
      type: actionTypes.DELETE_TICKET_REQUEST,
      payload: { ticketId, token },
    };
  },
  deleteTicketSuccess: () => {
    return {
      type: actionTypes.DELETE_TICKET_SUCCESS,
    };
  },
  deleteTicketFailed: (error) => {
    return {
      type: actionTypes.DELETE_TICKET_FAILED,
      payload: { error },
    };
  },

  updatePropertyHandler: (property) => {
    return {
      type: actionTypes.UPDATE_PROPERTY,
      payload: { property },
    };
  },
};
