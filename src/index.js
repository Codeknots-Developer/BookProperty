import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css'
import './style/bootstrap/bootstrap.min.css'
import './style/font-awesome/css/font-awesome.min.css'
// import createSagaMiddleware from 'redux-saga';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { logger } from 'redux-logger';
// import reducer from './reducers';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware,   logger),
// );
// sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

