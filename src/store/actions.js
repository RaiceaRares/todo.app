import * as types from './types';

export const addTask = (task) => ({
  type: types.ADD_TASK,
  payload: task,
});

export const removeTask = (taskId) => ({
  type: types.REMOVE_TASK,
  payload: taskId,
});

export const finishTask = (taskId) => ({
  type: types.FINISH_TASK,
  payload: taskId,
});
