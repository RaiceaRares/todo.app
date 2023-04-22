import React from 'react';
import useTaskActions from "../hooks/useTaskActions";
import styled from "styled-components";
import { TaskProps } from "./TaskProps";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

interface ButtonProps {
  variant?: "primary" | "danger";
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#0070f3" : "red"};
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Text = styled.span<{ isFinished: boolean }>`
  flex: 1;
  margin-right: 10px;
  text-decoration: ${({ isFinished }) => (isFinished ? "line-through" : "none")};
`;

const Task: React.FC<TaskProps> = ({ task, onFinish, onRemove }) => {
  const { removeTask, finishTask } = useTaskActions();

  

  const handleRemoveTask = (taskId: string) => {
    removeTask(taskId);
    onRemove(taskId);
  };

  const handleFinishTask = (taskId: string) => {
    finishTask(taskId);
    onFinish(taskId);
  };

  return (
    <Container>
      <Text isFinished={task.isFinished}>{task.text}</Text>
      <div>
        {!task.isFinished && (
          <Button variant="primary" onClick={() => handleFinishTask(task.id)}>
            Done
          </Button>
        )}
        <Button onClick={() => handleRemoveTask(task.id)}>Remove</Button>
      </div>
    </Container>
  );
};

export default Task;
