export const ADD_TASK = 'ADD_TASK' as const;
export const REMOVE_TASK = 'REMOVE_TASK' as const;
export const FINISH_TASK = 'FINISH_TASK' as const;

type ActionType = typeof ADD_TASK | typeof REMOVE_TASK | typeof FINISH_TASK;

export default ActionType;
