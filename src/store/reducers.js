import { ADD_TASK, FINISH_TASK, REMOVE_TASK } from './types';
const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case FINISH_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload ? {...task, completed: true} : task)
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default taskReducer;
