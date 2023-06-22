import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_reset.scss'
import './styles/_font.scss'
import App from './App';
require('./index.scss')

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);