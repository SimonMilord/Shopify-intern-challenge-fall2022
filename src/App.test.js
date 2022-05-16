import { render } from '@testing-library/react';
import App from './App';

// Tests the rendering of the landing page component
test('renders the landing page', () => {
  render(<App />);
});