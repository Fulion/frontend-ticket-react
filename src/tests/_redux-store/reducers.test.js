import {initialTicketState, ticketReducer} from "../../_redux-store/reducers";
import {actionTypes} from "../../_redux-store/actionTypes";


describe('Reducer tests', () => {

    test('CREATE_TICKET_REQUEST', () => {
        const state = {
            ...initialTicketState,
            isLoading: false,
        };
        const expected = {
            ...initialTicketState,
            isLoading: true,
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.CREATE_TICKET_REQUEST,
        });

        expect(reducer).toEqual(expected);
    });

    test('CREATE_TICKET_SUCCESS', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            creating: "fulfilled"
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.CREATE_TICKET_SUCCESS,
        });

        expect(reducer).toEqual(expected);
    });

    test('CREATE_TICKET_FAILED', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            error: "Sign Error",
            creating: null,
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.CREATE_TICKET_FAILED,
        });

        expect(reducer).toEqual(expected);
    });

    test('GET_TICKETS_REQUEST', () => {
        const state = {
            ...initialTicketState,
            isLoading: false,
        };
        const expected = {
            ...initialTicketState,
            isLoading: true,
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.GET_TICKETS_REQUEST,
        });

        expect(reducer).toEqual(expected);
    });

    test('GET_TICKETS_SUCCESS', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            tickets: ["ticket1", "ticket2"],
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.GET_TICKETS_SUCCESS,
            payload: {
                tickets: ["ticket1", "ticket2"],
            }
        });

        expect(reducer).toEqual(expected);
    });

    test('GET_TICKETS_FAILED', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            error: "Tickets Error",
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.GET_TICKETS_FAILED,
        });

        expect(reducer).toEqual(expected);
    });

    test('GET_TICKET_BY_ID_REQUEST', () => {
        const state = {
            ...initialTicketState,
            isLoading: false,
        };
        const expected = {
            ...initialTicketState,
            isLoading: true,
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.GET_TICKET_BY_ID_REQUEST,
        });

        expect(reducer).toEqual(expected);
    });

    test('GET_TICKET_BY_ID_SUCCESS', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            ticket: "ticket1",
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.GET_TICKET_BY_ID_SUCCESS,
            payload: {
                ticket: "ticket1",
            }
        });

        expect(reducer).toEqual(expected);
    });

    test('UPDATE_TICKET_REQUEST', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            error: "update error"
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.UPDATE_TICKET_REQUEST,
        });

        expect(reducer).toEqual(expected);
    });

    test('UPDATE_TICKET_SUCCESS', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            ticket: "ticket1",
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.UPDATE_TICKET_SUCCESS,
            payload: {
                ticket: "ticket1",
            }
        });

        expect(reducer).toEqual(expected);
    });

    test('UPDATE_TICKET_FAILED', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            error: "Update tickets error",
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.UPDATE_TICKET_FAILED,
        });

        expect(reducer).toEqual(expected);
    });

    test('CLOSED_TICKET_REQUEST', () => {
        const state = {
            ...initialTicketState,
            isLoading: false,
        };
        const expected = {
            ...initialTicketState,
            isLoading: true,
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.CLOSED_TICKET_REQUEST,
        });

        expect(reducer).toEqual(expected);
    });

    test('CLOSED_TICKET_SUCCESS', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            ticket: "ticket1"
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.CLOSED_TICKET_SUCCESS,
            payload: {
                ticket: "ticket1",
            }
        });

        expect(reducer).toEqual(expected);
    });

    test('CLOSED_TICKET_FAILED', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            error: "update tickets error"
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.CLOSED_TICKET_FAILED,
        });

        expect(reducer).toEqual(expected);
    });

    test('DELETE_TICKET_REQUEST', () => {
        const state = {
            ...initialTicketState,
            isLoading: false,
        };
        const expected = {
            ...initialTicketState,
            isLoading: true,
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.DELETE_TICKET_REQUEST,
        });

        expect(reducer).toEqual(expected);
    });

    test('DELETE_TICKET_SUCCESS', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            deleting: "ticket_is_deleted",
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.DELETE_TICKET_SUCCESS,
        });

        expect(reducer).toEqual(expected);
    });

    test('DELETE_TICKET_FAILED', () => {
        const state = {
            ...initialTicketState,
            isLoading: true,
        };
        const expected = {
            ...initialTicketState,
            isLoading: false,
            error: "delete tickets error",
            deleting: null,
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.DELETE_TICKET_FAILED,
        });

        expect(reducer).toEqual(expected);
    });

    test('UPDATE_PROPERTY', () => {
        const state = {
            ...initialTicketState,
        };
        const expected = {
            ...initialTicketState,
        };
        const reducer = ticketReducer(state, {
            type: actionTypes.UPDATE_PROPERTY,
            payload: {
                property: 1
            },
        });

        expect(reducer).toEqual(expected);
    });

    test('default', () => {
        const state = {
            ...initialTicketState,
        };
        const expected = {
            ...initialTicketState,
        };
        const reducer = ticketReducer(state, {

        });

        expect(reducer).toEqual(expected);
    });
});
