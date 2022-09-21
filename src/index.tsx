import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupStore } from './shared/store';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/theme';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
