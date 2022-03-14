import {render, screen} from '@testing-library/react';
import Ticket from './../../../pages/ticket/Ticket.page';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import userEvent from "@testing-library/user-event";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        state:
            {
                email: 'someemail@something.com'
            },
        tid: 999,
        })
}));

describe('Ticket tests', () => {

    test('ticket', () => {


        const middlewares = [thunk];

        const mockStore = configureMockStore(middlewares);

        const store = mockStore(
            {
                tid: "test",
                ticket: {
                    ticket: "someticket",
                    isLoading: false,
                    deleting: null,
                },
                root: {
                    token: "token",
                }
            }
        );
        const tree = render(
            <Provider store={store}>
                <Ticket />);
            </Provider>
        )

        const linkElement = screen.getByText(/Schließen Sie die Tickets ein/i);
        expect(linkElement).toBeInTheDocument();
        expect(store.getActions()[0].type).toBe("GET_TICKET_BY_ID_REQUEST");
        expect(store.getActions()[0].payload.ticketId).toBe(999);
        expect(tree).toMatchSnapshot();
    });

    test('ticket_is_deleted in history', () => {

        const middlewares = [thunk];

        const mockStore = configureMockStore(middlewares);

        const store = mockStore(
            {
                tid: "test",
                ticket: {
                    ticket: "someticket",
                    isLoading: false,
                    deleting: "ticket_is_deleted",
                },
                root: {
                    token: "token",
                }
            }
        );
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push');

        const tree = render(
            <Provider store={store}>
                <Router history={history}>
                    <Ticket />
                </Router>
            </Provider>
        )
        expect(pushSpy).toHaveBeenCalledWith("/dashboard");
        expect(tree).toMatchSnapshot();

    });

    test('handleOnChange', () => {

        const middlewares = [thunk];

        const mockStore = configureMockStore(middlewares);

        const store = mockStore(
            {
                tid: "test",
                ticket: {
                    ticket: "someticket",
                    isLoading: false,
                    deleting: null,
                },
                root: {
                    token: "token",
                }
            }
        );

        const tree = render(
            <Provider store={store}>
                <Ticket/>
            </Provider>
        )

        const textbox = screen.getByRole("textbox");

        userEvent.paste(textbox, "some value");

        expect(textbox).toHaveTextContent("some value");
        expect(tree).toMatchSnapshot();
    });

    test('handleOnSubmit', () => {

        const middlewares = [thunk];

        const mockStore = configureMockStore(middlewares);

        const store = mockStore(
            {
                tid: "test",
                ticket: {
                    ticket: "someticket",
                    isLoading: false,
                    deleting: null,
                },
                root: {
                    token: "token",
                }
            }
        );


        const tree = render(
            <Provider store={store}>
                <Ticket/>
            </Provider>
        )

        const aktualisierenTicketButton = screen.getAllByText(/Reply/i)[1];
        const textbox = screen.getByRole("textbox");

        userEvent.paste(textbox, "some value");
        userEvent.click(aktualisierenTicketButton);

        expect(textbox).toHaveTextContent("some value");
        expect(store.getActions()[0].type).toBe("GET_TICKET_BY_ID_REQUEST");
        expect(store.getActions()[1].type).toBe("UPDATE_TICKET_REQUEST");
        expect(store.getActions()[1].payload.ticketId).toBe(999);
        expect(store.getActions()[1].type).not.toBe("GET_TICKET_BY_ID_REQUEST");

        expect(tree).toMatchSnapshot();
    });

    test('closedTicketHandler', () => {

        const middlewares = [thunk];

        const mockStore = configureMockStore(middlewares);

        const store = mockStore(
            {
                tid: "test",
                ticket: {
                    ticket: {
                        subject: "subject",
                        createdAt: "today",
                        status: "open",
                    },
                    isLoading: false,
                    deleting: null,
                },
                root: {
                    token: "token",
                }
            }
        );


        const tree = render(
            <Provider store={store}>
                <Ticket/>
            </Provider>
        )

        const closedTicketHandlerButton = screen.getByText(/Schließen Sie die Tickets ein/i);

        userEvent.click(closedTicketHandlerButton);

        expect(store.getActions()[0].type).toBe("GET_TICKET_BY_ID_REQUEST");
        expect(store.getActions()[1].payload.ticketId).toBe(999);
        expect(store.getActions()[1].type).toBe("CLOSED_TICKET_REQUEST");

        expect(tree).toMatchSnapshot();
    });

    test('deleteTicketHandler', () => {

        const middlewares = [thunk];

        const mockStore = configureMockStore(middlewares);

        const store = mockStore(
            {
                tid: "test",
                ticket: {
                    ticket: {
                        subject: "subject",
                        createdAt: "today",
                        status: "open",
                    },
                    isLoading: false,
                    deleting: null,
                },
                root: {
                    token: "token",
                }
            }
        );


        const tree = render(
            <Provider store={store}>
                <Ticket/>
            </Provider>
        )

        const closedTicketHandlerButton = screen.getByText(/Delete/i);

        userEvent.click(closedTicketHandlerButton);
        expect(store.getActions()[0].type).toBe("GET_TICKET_BY_ID_REQUEST");
        expect(store.getActions()[1].payload.ticketId).toBe(999);
        expect(store.getActions()[1].type).toBe("DELETE_TICKET_REQUEST");

        expect(tree).toMatchSnapshot();
    });

    test('Message History', () => {

        const middlewares = [thunk];

        const mockStore = configureMockStore(middlewares);

        const store = mockStore(
            {
                tid: "test",
                ticket: {
                    ticket: {
                        subject: "subject",
                        createdAt: "today",
                        status: "open",
                        conversations: [
                            {
                                sender: "Aleks",
                                message: "test",
                                createdAt: "yesterday1",
                            },
                            {
                                sender: "Aleks2",
                                message: "test2",
                                createdAt: "yesterday2",
                            },
                        ],
                    },
                    isLoading: false,
                    deleting: null,
                },
                root: {
                    token: "token",
                }
            }
        );


        const tree = render(
            <Provider store={store}>
                <Ticket/>
            </Provider>
        )

        const conversation1 = screen.getByText(/yesterday1/i);
        expect(conversation1).toBeInTheDocument();
        const conversation2= screen.getByText(/Aleks2/i);
        expect(conversation2).toBeInTheDocument();
        expect(tree).toMatchSnapshot();
    });

})
