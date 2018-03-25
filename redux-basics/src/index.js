import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const myStore = createStore(rootReducer);


ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
