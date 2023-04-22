import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { finishTask, removeTask } from '../store/actions';

interface TaskItemProps {
  id: string;
  text: string;
  isCompleted: boolean;
}

const TaskItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const TaskText = styled.p<{ isCompleted: boolean }>`
  margin: 0;
  flex-grow: 1;
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`;

const Button = styled.button`
  margin-left: 8px;
`;

const TaskItem: React.FC<TaskItemProps> = ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(finishTask(id));
  };

  const handleRemove = () => {
    dispatch(removeTask(id));
  };

  return (
    <TaskItemContainer>
      <TaskText isCompleted={isCompleted}>{text}</TaskText>
      <div>
        {!isCompleted && (
          <Button onClick={handleComplete}>
            Done
          </Button>
        )}
        <Button onClick={handleRemove}>
          Remove
        </Button>
      </div>
    </TaskItemContainer>
  );
};

export default TaskItem;
