import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redux/store";
import {history} from "./services";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
       <BrowserRouter history={history}>
           <App/>
       </BrowserRouter>
   </Provider>
);
