import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTask, removeTask, finishTask } from '../store/actions';

interface TaskActions {
  addTask: (task: string) => void;
  removeTask: (taskId: string) => void;
  finishTask: (taskId: string) => void;
}

const useTaskActions = (): TaskActions => {
  const dispatch = useDispatch();

  const handleAddTask = useCallback((task: string) => {
    dispatch(addTask(task));
  }, [dispatch]);

  const handleRemoveTask = useCallback((taskId: string) => {
    dispatch(removeTask(taskId));
  }, [dispatch]);

  const handleFinishTask = useCallback((taskId: string) => {
    dispatch(finishTask(taskId));
  }, [dispatch]);

  return {
    addTask: handleAddTask,
    removeTask: handleRemoveTask,
    finishTask: handleFinishTask,
  };
};

export default useTaskActions;
