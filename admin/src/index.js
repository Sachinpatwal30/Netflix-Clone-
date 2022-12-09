import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ContextProvider} from "./context/authContext/AuthContext"
import { ListContextProvider } from './context/ListContext/ListContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { UserContextProvider } from './context/usersContext/UserContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ContextProvider>

      <MovieContextProvider>

        <UserContextProvider>

          <ListContextProvider>

          <App />


          </ListContextProvider>

        </UserContextProvider>

      </MovieContextProvider>

    </ContextProvider>

  </React.StrictMode>
);

