import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataContextProvider } from './AppContext/DataContext';
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContextProvider>
        <App />
        <Toaster/>
    </DataContextProvider>
  </React.StrictMode>
);
