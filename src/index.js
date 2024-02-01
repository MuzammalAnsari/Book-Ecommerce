import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from 'Contexts/CartContext';
import SidebarProvider from 'Contexts/SidebarContext';
import AuthContextProvider from 'Contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <React.StrictMode>
        <BrowserRouter>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </React.StrictMode>
    </CartProvider>
  </SidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
