import React from 'react';
import Navigator from './navigator/Navigator'
import { createStore, applyMiddleware } from 'redux';
import Reducers from './src/reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(Reducers, applyMiddleware(thunk))

export default function App() {

      return (
        <Provider store={store}>
          <Navigator />
        </Provider>
      );
  
}
