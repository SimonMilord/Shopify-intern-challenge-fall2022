import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {render, screen} from '@testing-library/react';
import ResponsesList from './responsesList';

// Test the case where no responses are mapped in the list
test('renders no list when no items are stored', ()=> {
  const {queryAllByTestId} = render(<Router><ResponsesList /></Router>)

  const responses = screen.queryAllByTestId('response').map(li => li.textContent);
  expect(responses).toMatchInlineSnapshot([], `Array []`);
})