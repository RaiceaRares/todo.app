import * as types from './types';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface AddTaskAction {
  type: typeof types.ADD_TASK;
  payload: Task;
}

interface RemoveTaskAction {
  type: typeof types.REMOVE_TASK;
  payload: number; // taskId
}

interface FinishTaskAction {
  type: typeof types.FINISH_TASK;
  payload: number; 
}

export const addTask = (task: Task): AddTaskAction => ({
  type: types.ADD_TASK,
  payload: task,
});

export const removeTask = (taskId: number): RemoveTaskAction => ({
  type: types.REMOVE_TASK,
  payload: taskId,
});

export const finishTask = (taskId: number): FinishTaskAction => ({
  type: types.FINISH_TASK,
  payload: taskId,
});

export type TaskAction = AddTaskAction | RemoveTaskAction | FinishTaskAction;
