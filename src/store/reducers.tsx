import { ADD_TASK, FINISH_TASK, REMOVE_TASK } from './types';

interface Task {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
}

interface TaskState {
  tasks: Task[];
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface FinishTaskAction {
  type: typeof FINISH_TASK;
  payload: number; 
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: number; 
}

export type TaskAction = AddTaskAction | FinishTaskAction | RemoveTaskAction;

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state: TaskState = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case FINISH_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
