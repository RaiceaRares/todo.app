import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTask, removeTask, finishTask } from '../store/actions';

const useTaskActions = () => {
  const dispatch = useDispatch();

  const handleAddTask = useCallback((task) => {
    dispatch(addTask(task));
  }, [dispatch]);

  const handleRemoveTask = useCallback((taskId) => {
    dispatch(removeTask(taskId));
  }, [dispatch]);

  const handleFinishTask = useCallback((taskId) => {
    dispatch(finishTask(taskId));
  }, [dispatch]);

  return {
    addTask: handleAddTask,
    removeTask: handleRemoveTask,
    finishTask: handleFinishTask,
  };
};

export default useTaskActions;
