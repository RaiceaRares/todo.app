import Head from "next/head";
import styled from "styled-components";
import useTaskActions from '../hooks/useTaskActions';
import TaskForm from "../components/TaskForm";
import Task  from '../components/TaskList';
import React, { useState } from 'react';

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
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleAddTask = (text: string) => {
    const newTask = { id: `${Date.now()}`, text, isFinished: false };
    setTasks([...tasks, newTask]);
    addTask(text); 
  };

  const handleFinishTask = (taskId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isFinished: true };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
    finishTask(taskId); 
  };

  const handleRemoveTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    removeTask(taskId); 
  };

  return (
    <Container>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>My Todo List</Title>
      <TaskForm onAddTask={handleAddTask}/>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onFinish={handleFinishTask}
          onRemove={handleRemoveTask}
        />
      ))}
    </Container>
  );
};

export default Todo;
