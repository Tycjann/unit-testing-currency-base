import CurrencyForm from './CurrencyForm';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => { }} />);
  });

  const testCases = [
    { test: 1, amount: '100', from: 'PLN', to: 'USD' },
    { test: 2, amount: '20', from: 'USD', to: 'PLN' },
    { test: 3, amount: '200', from: 'PLN', to: 'USD' },
    { test: 4, amount: '345', from: 'USD', to: 'PLN' },
  ];

  for (const testObj of testCases) {
    it('Test: ' + testObj.test + ' should run action callback with proper data on form submit', () => {
      const action = jest.fn();

      // render component
      render(<CurrencyForm action={action} />);

      // find “convert” button
      const submitButton = screen.getByText('Convert');

      // find fields elements
      const amountField = screen.getByTestId('amount');
      const fromField = screen.getByTestId('from-select');
      const toField = screen.getByTestId('to-select');

      // set test values to fields
      userEvent.type(amountField, testObj.amount);
      userEvent.selectOptions(fromField, testObj.from);
      userEvent.selectOptions(toField, testObj.to);

      // simulate user click on "convert" button
      userEvent.click(submitButton);

      // check if action callback was called once and with proper argument
      expect(action).toHaveBeenCalledTimes(1);
      expect(action).toHaveBeenCalledWith({ amount: parseInt(testObj.amount), from: testObj.from, to: testObj.to });
    });
    // unmount component
    cleanup();
  }
});