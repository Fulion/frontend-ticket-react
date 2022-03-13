import {render, screen} from '@testing-library/react';
import Ticket from './../../../pages/ticket/Ticket.page';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import userEvent from "@testing-library/user-event";
import {ticketActions} from "../../../_redux-store/actions";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ state: { email: 'someemail@something.com' } }),
    // useHistory: () => ({ push: jest.fn()}),
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
        const pushSyp = jest.spyOn(history, 'push');

        const tree = render(
            <Provider store={store}>
                <Router history={history}>
                    <Ticket />
                </Router>
            </Provider>
        )
        expect(pushSyp).toHaveBeenCalledWith("/dashboard");
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

        // console.log(aktualisierenTicket);

        const tree = render(
            <Provider store={store}>
                <Ticket/>
            </Provider>
        )

        const aktualisierenTicketButton = screen.getAllByText(/Reply/i)[1];
        // const handleOnSubmit = container.getAllByRole("handleOnSubmit");
        // console.log(aktualisierenTicket);
        // const handleOnChange = jest.spyOn(aktualisierenTicket, 'handleOnChange');

        userEvent.click(aktualisierenTicketButton);
        expect(tree).toMatchSnapshot();

        // expect(ticketActions.updateTicket).toHaveBeenCalled();
        // expect(handleOnSubmit).toHaveBeenCalled();
        // expect(handleOnChange).not.toHaveBeenCalled();
        // expect(pushSyp).toHaveBeenCalled();
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

        // console.log(aktualisierenTicket);

        const tree = render(
            <Provider store={store}>
                <Ticket/>
            </Provider>
        )

        const textbox = screen.getByRole("textbox");
        // const handleOnSubmit = container.getAllByRole("handleOnSubmit");
        console.log(textbox);
        // const handleOnChange = jest.spyOn(aktualisierenTicket, 'handleOnChange');

        userEvent.paste(textbox, "some value");
        expect(tree).toMatchSnapshot();

        // expect(handleOnSubmit).toHaveBeenCalled();
        // expect(handleOnChange).not.toHaveBeenCalled();
        // expect(pushSyp).toHaveBeenCalled();
    });
})
