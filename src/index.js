import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {QueryClient, QueryClientProvider} from 'react-query';

axios.defaults.baseURL = 'https://api.airtable.com/v0/';
axios.defaults.headers['Authorization'] = `Bearer ${
  process.env.REACT_APP_API
}`

const client = new QueryClient();
ReactDOM.render (<QueryClientProvider client={client}>
  <App/></QueryClientProvider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
