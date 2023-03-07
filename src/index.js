import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './asset/css/index.css'
import Index from './routes';
import { compose,applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer,compose(applyMiddleware(thunk)))

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <Index/>
  </Provider>
  </React.StrictMode>
);
