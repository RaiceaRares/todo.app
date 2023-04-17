import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px 0 0 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background-color: #008cba;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;



  const TaskForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (taskText.trim() === "") return;
      onAddTask(taskText);
      setTaskText("");
    };
  
    const handleChange = (event) => {
      setTaskText(event.target.value);
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add new task"
          value={taskText}
          onChange={handleChange}
        />
        <Button type="submit">Add</Button>
      </Form>
    );
  };
  
  export default TaskForm;
