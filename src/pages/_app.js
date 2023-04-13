import React from 'react';
import { Provider } from 'react-redux';

import taskReducer from '../store/reducers';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import GlobalStyle from '../styles/globalStyles';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TaskForm />
      <TaskList />
    </Provider>
  );
}

export default App;
