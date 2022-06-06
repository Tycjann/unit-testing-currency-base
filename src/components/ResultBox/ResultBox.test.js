import ResultBox from './ResultBox';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';


describe('Component ResultBox', () => {

  const testCases = [
    { test: 1, type: 'PLN to USD', from: 'PLN', to: 'USD', amount: '100', result: 'PLN 100.00 = $28.57' },
    { test: 2, type: 'PLN to USD', from: 'PLN', to: 'USD', amount: '11', result: 'PLN 11.00 = $3.14' },
    { test: 3, type: 'PLN to USD', from: 'PLN', to: 'USD', amount: '-12', result: 'Wrong value…' },
    { test: 4, type: 'PLN to USD', from: 'PLN', to: 'USD', amount: '3', result: 'PLN 3.00 = $0.86' },

    { test: 5, type: 'USD to PLN', from: 'USD', to: 'PLN', amount: '100', result: '$100.00 = PLN 350.00' },
    { test: 6, type: 'USD to PLN', from: 'USD', to: 'PLN', amount: '1', result: '$1.00 = PLN 3.50' },
    { test: 7, type: 'USD to PLN', from: 'USD', to: 'PLN', amount: '-12', result: 'Wrong value…' },
    { test: 8, type: 'USD to PLN', from: 'USD', to: 'PLN', amount: '10', result: '$10.00 = PLN 35.00' },

    { test: 9, type: 'PLN to PLN', from: 'PLN', to: 'PLN', amount: '100', result: 'PLN 100.00 = PLN 100.00' },
    { test: 10, type: 'USD to USD', from: 'USD', to: 'USD', amount: '100', result: '$100.00 = $100.00' },
  ];

  for (const testObj of testCases) {
    it('Test: ' + testObj.test + ' should render without crashing - ' + testObj.type, () => {
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
      const resultField = screen.getByTestId('result');
      expect(resultField).toHaveTextContent(testObj.result);
      cleanup();
    });
  }

  

  

});