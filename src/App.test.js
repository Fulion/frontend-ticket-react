import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';



test('renders learn react link', () => {
    const middlewares = [thunk];

    const mockStore = configureMockStore(middlewares);

    const store = mockStore(
        {
            root: "test",
        }
    );
    render(
        <Provider store={store}> // Set context
          <App />);
        </Provider>
    )

  const linkElement = screen.getByText(/Kennwort vergessen/i);
  expect(linkElement).toBeInTheDocument();
});
