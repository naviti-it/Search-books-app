import { CssBaseline, ThemeProvider } from '@mui/material';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import searchReducer from './state'
import { theme } from './theme';


const store = configureStore({
  reducer: { search: searchReducer }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
      <CssBaseline />
        <App />
    </React.StrictMode>
    </ThemeProvider>
  </Provider>
);

