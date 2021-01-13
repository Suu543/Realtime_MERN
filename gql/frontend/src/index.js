import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from "./context/authContext";
// We can use Router System by using this module
import { BrowserRouter } from "react-router-dom";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

