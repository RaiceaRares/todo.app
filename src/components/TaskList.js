import { useTaskActions } from "../hooks/useTaskActions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#0070f3" : "red"};
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Text = styled.span`
  flex: 1;
  margin-right: 10px;
  text-decoration: ${({ isFinished }) => (isFinished ? "line-through" : "none")};
`;

const Task = ({ task }) => {
  const { finishTask, removeTask } = useTaskActions();

  const handleFinish = () => {
    finishTask(task.id);
  };

  const handleRemove = () => {
    removeTask(task.id);
  };

  return (
    <Container>
      <Text isFinished={task.isFinished}>{task.text}</Text>
      <div>
        {!task.isFinished && (
          <Button variant="primary" onClick={handleFinish}>
            Done
          </Button>
        )}
        <Button onClick={handleRemove}>Remove</Button>
      </div>
    </Container>
  );
};

export default Task;
