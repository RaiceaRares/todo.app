import { useState, useEffect } from 'react';
import axios from 'axios';
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

const TaskList: React.FC<TaskProps> = ({ onFinish, onRemove }) => {
  const { removeTask, finishTask } = useTaskActions();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/todos');
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  const handleRemoveTask = (taskId: string) => {
    removeTask(taskId);
    onRemove(taskId);
  };

  const handleFinishTask = (taskId: string) => {
    finishTask(taskId);
    onFinish(taskId);
  };

  return (
    <>
      {tasks.map((task) => (
        <Container key={task.id}>
          <Text isFinished={task.finished}>{task.task}</Text>
          <div>
            {!task.finished && (
              <Button variant="primary" onClick={() => handleFinishTask(task.id.toString())}>
                Done
              </Button>
            )}
            <Button onClick={() => handleRemoveTask(task.id.toString())}>Remove</Button>
          </div>
        </Container>
      ))}
    </>
  );
};

export default TaskList;
