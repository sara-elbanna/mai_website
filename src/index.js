import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import appReducer from './store/reducers';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import "./localization/index";
import "./firebase.js"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authInfo']
}

const persistedReducer = persistReducer(persistConfig, appReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))
export const persistor = persistStore(store)

// syncTranslationWithStore(store)
// store.dispatch(loadTranslations(translationsObject));
// store.dispatch(setLocale('en'));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Suspense fallback="Loading...">
          <App />
        </React.Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
