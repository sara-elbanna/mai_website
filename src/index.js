import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import appReducer from './store/reducers';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import "./localization/index";


export let store = createStore(appReducer, applyMiddleware(thunkMiddleware))

// syncTranslationWithStore(store)
// store.dispatch(loadTranslations(translationsObject));
// store.dispatch(setLocale('en'));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback="Loading...">
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
