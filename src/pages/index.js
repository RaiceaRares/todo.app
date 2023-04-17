import Head from "next/head";
import styled from "styled-components";
import useTaskActions from '../hooks/useTaskActions';
import TaskForm from "../components/TaskForm";
import Task from '../components/TaskList';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Todo = () => {
  const { addTask, removeTask, finishTask } = useTaskActions();
  
  return (
    <Container>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>My Todo List</Title>
      <TaskForm onAdd={addTask} />
      <Task  onFinish={finishTask} onRemove={removeTask} /> 
    </Container>
  );
};

export default Todo;
