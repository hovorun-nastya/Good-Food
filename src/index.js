import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import store from './app/store'
import {Auth0Provider} from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Auth0Provider domain={domain}
                               clientId={clientId}
                               redirectUri={window.location.origin}>
                    <App/>
                </Auth0Provider>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
);


