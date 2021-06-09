import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios"

axios.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json'
console.log(process.env.REACT_APP_GITGISTKEY)
if (process.env.REACT_APP_GITGISTKEY != null) {
    axios.defaults.headers.common['Authorization'] = `token ${process.env.REACT_APP_GITGISTKEY}`
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
