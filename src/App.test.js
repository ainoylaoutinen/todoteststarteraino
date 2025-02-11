import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{ render, screen,fireEvent} from'@testing-library/react’;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('add todo', () => {
  render(<App/>);

  const desc = screen.getByPlaceholderTest('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee'}})

  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.01.2021'}})

  const button = screen.getByText('Add');
  fireEvent.click(button);

  const tablecell = screen.getByText(/go to coffee/i);
  expect(tablecell).toBeInTheDocument();
})

