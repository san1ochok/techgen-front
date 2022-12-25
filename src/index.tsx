import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
