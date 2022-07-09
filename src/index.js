import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './redux/reducers'

const Store = createStore(reducer);
//ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);