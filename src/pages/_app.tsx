import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import taskReducer from '../store/reducers';
import Todo from './index'
import GlobalStyle from '../styles/globalStyles';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Todo/>
    </Provider>
  );
}

export default App;
