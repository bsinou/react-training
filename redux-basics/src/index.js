import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './store/reducer'
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const myStore = createStore(reducer);

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
