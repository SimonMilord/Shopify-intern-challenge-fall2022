import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {render} from '@testing-library/react';
import Jarvis from './Jarvis';

// tests if the Jarvis Component renders properly
it("renders correctly", () => {
  render(<Router><Jarvis /></Router>);
})
