/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('<Naviagation /> component', () => {
  test('render nav', () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector('#header')).toBeInTheDocument();
  });

  test("main modal doesn't show on load", () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector('.main-modal')).not.toBeInTheDocument();
  });

  test('main modal shows when menu button is clicked', async () => {
    const AppDOM = render(<App />).container.firstChild;
    const menu_item = AppDOM.querySelector('.menu-icon');
    await userEvent.click(menu_item);
    expect(AppDOM.querySelector('.main-modal')).toBeInTheDocument();
  });
});
