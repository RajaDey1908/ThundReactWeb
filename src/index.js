import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducerFirst from './store/reducers/reducerFirst'
import reducerSecond from './store/reducers/reducerSecond'

const rootReducer=combineReducers({
    redFst:reducerFirst,
    redSnd:reducerSecond
})

const logger = store => {
    return next =>{
        return action =>{
            //console.log("[Middleware] Dispatching", action)
            const result = next(action);
            //console.log("[Middleware] next state", store.getState())
            return result;
        }
    }
}

const store=createStore(rootReducer, applyMiddleware(logger,thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
