import axios from "axios";
import { takeEvery, call, put, all } from "redux-saga/effects";
import { authActions, ticketActions } from "./actions";
import { actionTypes } from "./actionTypes";

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(async function () {
      return await axios.post("http://localhost:3001/v1/user/login", {
        email,
        password,
      });
    });
    yield put(authActions.loginRequestSuccess(response.data));
  } catch (error) {
    yield put(authActions.loginRequestFailed());
  }
}
function* logoutSaga(action) {
  try {
    const { token } = action.payload;
    yield call(async function () {
      return await axios.get("http://localhost:3001/v1/user/logout", {
        headers: { Authorization: `Bearer ${token}` },
      });
    });
    yield put(authActions.logoutRequestSuccess());
  } catch (error) {
    yield put(authActions.logoutRequestSuccess());
  }
}

function* signupSaga(action) {
  try {
    const { user } = action.payload;
    yield call(async function () {
      return await axios.post("http://localhost:3001/v1/user/signup", user);
    });
    yield put(authActions.signUpRequestSuccess());
  } catch (error) {
    yield put(authActions.signUpRequestFailed());
  }
}

function* getUserSaga(action) {
  try {
    const { token } = action.payload;
    const user = yield call(async function () {
      return await axios.get("http://localhost:3001/v1/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
    });
    yield put(authActions.getUserRequestSuccess(user.data));
  } catch (error) {
    yield put(authActions.getUserRequestFailed(error));
  }
}

function* createTicketSaga(action) {
  try {
    const { ticket, token } = action.payload;
    const response = yield call(async function () {
      return await axios.post("http://localhost:3001/v1/ticket", ticket, {
        headers: { Authorization: `Bearer ${token}` },
      });
    });
    yield put(ticketActions.createTicketSuccess(response.data));
  } catch (error) {
    yield put(ticketActions.createTicketFailed(error));
  }
}
function* getTicketsSaga(action) {
  try {
    const { token } = action.payload;
    const response = yield call(async function () {
      return await axios.get("http://localhost:3001/v1/ticket", {
        headers: { Authorization: `Bearer ${token}` },
      });
    });
    yield put(ticketActions.getTicketsSuccess(response.data));
  } catch (error) {
    yield put(ticketActions.getTicketsFailed(error));
  }
}
function* getTicketByIdSaga(action) {
  try {
    const { token, ticketId } = action.payload;
    const response = yield call(async function () {
      return await axios.get(`http://localhost:3001/v1/ticket/${ticketId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    });
    yield put(ticketActions.getTicketByIdSuccess(response.data));
  } catch (error) {
    yield put(ticketActions.getTicketByIdFailed(error));
  }
}
function* updateTicketSaga(action) {
  try {
    const { token, ticketId, ticket } = action.payload;
    const response = yield call(async function () {
      return await axios.put(
        `http://localhost:3001/v1/ticket/${ticketId}`,
        ticket,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    });
    yield put(ticketActions.updateTicketSuccess(response.data));
  } catch (error) {
    yield put(ticketActions.updateTicketFailed(error));
  }
}

function* closedTicketSaga(action) {
  try {
    const { token, ticketId } = action.payload;
    const response = yield call(async function () {
      return await axios.patch(
        `http://localhost:3001/v1/ticket/${ticketId}`,
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    });
    yield put(ticketActions.closedTicketSuccess(response.data));
  } catch (error) {
    yield put(ticketActions.closedTicketFailed(error));
  }
}

function* deleteTicketSaga(action) {
  try {
    const { token, ticketId } = action.payload;
    yield call(async function () {
      return await axios.delete(`http://localhost:3001/v1/ticket/${ticketId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    });
    yield put(ticketActions.deleteTicketSuccess());
  } catch (error) {
    yield put(ticketActions.deleteTicketFailed(error));
  }
}
function* saga() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginSaga);
  yield takeEvery(actionTypes.LOGOUT_REQUEST, logoutSaga);
  yield takeEvery(actionTypes.SIGNUP_REQUEST, signupSaga);
  yield takeEvery(actionTypes.GET_USER_REQUEST, getUserSaga);
  yield takeEvery(actionTypes.CREATE_TICKET_REQUEST, createTicketSaga);
  yield takeEvery(actionTypes.UPDATE_TICKET_REQUEST, updateTicketSaga);
  yield takeEvery(actionTypes.GET_TICKETS_REQUEST, getTicketsSaga);
  yield takeEvery(actionTypes.GET_TICKET_BY_ID_REQUEST, getTicketByIdSaga);
  yield takeEvery(actionTypes.CLOSED_TICKET_REQUEST, closedTicketSaga);
  yield takeEvery(actionTypes.DELETE_TICKET_REQUEST, deleteTicketSaga);
}

export function* rootSaga() {
  yield all([saga()]);
}
