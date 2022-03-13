import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import fetchMock from 'fetch-mock';
import {authActions, ticketActions} from '../../../src/_redux-store/actions'
import {actionTypes} from "../../_redux-store/actionTypes";
import {initialState, initialTicketState} from "../../_redux-store/reducers";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const usageDataEndpointMatcher = 'http://localhost:3001/v1/user/login';

describe('Action tests', () => {
    afterEach(() => fetchMock.restore());

    test('loginRequest', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            email: "somemail@something.com",
            password: "password",
        });

        const store = mockStore( {
            loginRequest: initialState,
        });

        const expectedActions = [
            {
                "payload": {
                    "email": "somemail@something.com",
                    "password": "password"
                },
                "type": "LOGIN_REQUEST"
            }
        ];

        store.dispatch(authActions.loginRequest("somemail@something.com", "password"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('createTicket', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            ticket: "ticket",
            token: "token"
        });

        const store = mockStore( {
            createTicket: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "ticket": "ticket",
                    "token": "token"
                },
                "type": "CREATE_TICKET_REQUEST"
            }
        ];

        store.dispatch(ticketActions.createTicket("ticket", "token"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('createTicketSuccess', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            response: true,
        });

        const store = mockStore( {
            createTicketSuccess: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "response": true
                },
                "type": "CREATE_TICKET_SUCCESS"
            }
        ];

        store.dispatch(ticketActions.createTicketSuccess(true));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('createTicketFailed', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            error: true,
        });

        const store = mockStore( {
            createTicketFailed: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "error": true
                },
                "type": "CREATE_TICKET_FAILED"
            }
        ];

        store.dispatch(ticketActions.createTicketFailed(true));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('updateTicket', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            ticket: "ticket",
            ticketId: 25,
            token: "token",
        });

        const store = mockStore( {
            updateTicket: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "ticket": "ticket",
                    "ticketId": 25,
                    "token": "token",
                },
                "type": "UPDATE_TICKET_REQUEST"
            }
        ];

        store.dispatch(ticketActions.updateTicket("ticket", 25, "token"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('updateTicketSuccess', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            ticket: "ticket",
        });

        const store = mockStore( {
            updateTicketSuccess: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "ticket": "ticket",
                },
                "type": "UPDATE_TICKET_SUCCESS"
            }
        ];

        store.dispatch(ticketActions.updateTicketSuccess("ticket"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('updateTicketFailed', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            error: true,
        });

        const store = mockStore( {
            updateTicketFailed: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "error": true,
                },
                "type": "UPDATE_TICKET_FAILED"
            }
        ];

        store.dispatch(ticketActions.updateTicketFailed(true));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('getTickets', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            token: "token",
        });

        const store = mockStore( {
            getTickets: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "token": "token",
                },
                "type": "GET_TICKETS_REQUEST"
            }
        ];

        store.dispatch(ticketActions.getTickets("token"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('getTicketsSuccess', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            tickets: "tickets",
        });

        const store = mockStore( {
            getTicketsSuccess: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "tickets": "tickets",
                },
                "type": "GET_TICKETS_SUCCESS"
            }
        ];

        store.dispatch(ticketActions.getTicketsSuccess("tickets"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('getTicketsFailed', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            error: true,
        });

        const store = mockStore( {
            getTicketsFailed: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "error": true,
                },
                "type": "GET_TICKETS_FAILED"
            }
        ];

        store.dispatch(ticketActions.getTicketsFailed(true));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('getTicketById', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            error: true,
        });

        const store = mockStore( {
            getTicketById: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "ticketId": 15,
                    "token": "token"
                },
                "type": "GET_TICKET_BY_ID_REQUEST"
            }
        ];

        store.dispatch(ticketActions.getTicketById(15, "token"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('getTicketByIdSuccess', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            ticket: 15,
        });

        const store = mockStore( {
            getTicketByIdSuccess: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "ticket": 15,
                },
                "type": "GET_TICKET_BY_ID_SUCCESS"
            }
        ];

        store.dispatch(ticketActions.getTicketByIdSuccess(15));

        expect(store.getActions()).toEqual(expectedActions);
    });


    test('getTicketByIdFailed', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            error: true,
        });

        const store = mockStore( {
            getTicketByIdFailed: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "error": true,
                },
                "type": "GET_TICKET_BY_ID_FAILED"
            }
        ];

        store.dispatch(ticketActions.getTicketByIdFailed(true));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('closedTicket', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            ticketId: 10,
            token: "token",
        });

        const store = mockStore( {
            closedTicket: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "ticketId": 10,
                    "token": "token",
                },
                "type": "CLOSED_TICKET_REQUEST"
            }
        ];

        store.dispatch(ticketActions.closedTicket(10, "token"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('closedTicketSuccess', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            ticket: "ticket"
        });

        const store = mockStore( {
            closedTicketSuccess: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "ticket": "ticket",
                },
                "type": "CLOSED_TICKET_SUCCESS"
            }
        ];

        store.dispatch(ticketActions.closedTicketSuccess("ticket"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('closedTicketFailed', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            error: true,
        });

        const store = mockStore( {
            closedTicketFailed: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "error": true
                },
                "type": "CLOSED_TICKET_FAILED"
            }
        ];

        store.dispatch(ticketActions.closedTicketFailed(true));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('deleteTicket', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            ticketId: 9,
            token: "token"
        });

        const store = mockStore( {
            deleteTicket: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "ticketId": 9,
                    token: "token"
                },
                "type": "DELETE_TICKET_REQUEST"
            }
        ];

        store.dispatch(ticketActions.deleteTicket(9, "token"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('deleteTicketSuccess', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {});

        const store = mockStore( {
            deleteTicketSuccess: initialTicketState,
        });

        const expectedActions = [
            {
                "type": "DELETE_TICKET_SUCCESS"
            }
        ];

        store.dispatch(ticketActions.deleteTicketSuccess());

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('deleteTicketFailed', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            error: true,
        });

        const store = mockStore( {
            deleteTicketFailed: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "error": true,
                },
                "type": "DELETE_TICKET_FAILED"
            }
        ];

        store.dispatch(ticketActions.deleteTicketFailed(true));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('updatePropertyHandler', () => {
        fetchMock.getOnce(usageDataEndpointMatcher, {
            property: "property",
        });

        const store = mockStore( {
            updatePropertyHandler: initialTicketState,
        });

        const expectedActions = [
            {
                "payload": {
                    "property": "property",
                },
                "type": "UPDATE_PROPERTY"
            }
        ];

        store.dispatch(ticketActions.updatePropertyHandler("property"));

        expect(store.getActions()).toEqual(expectedActions);
    });
});
