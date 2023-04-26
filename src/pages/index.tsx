import Head from "next/head";
import styled from "styled-components";
import useTaskActions from '../hooks/useTaskActions';
import TaskForm from "../components/TaskForm";
import TaskList, { TaskProps } from '../components/TaskList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

type TodoProps = {
  title: string;
  description: string;
};

const Todo = ({ title, description }: TodoProps) => {
  const { addTask, removeTask, finishTask } = useTaskActions();
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const fetchedTasks = response.data.map((task: any) => ({
        id: task.id,
        text: task.title,
        isFinished: task.completed
      }));
      setTasks(fetchedTasks);
    } catch (error) {
      console.log(error);
    }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (text: string) => {
    const newTask = { id: `${Date.now()}`, text, isFinished: false };
    setTasks([...tasks, newTask]);
    addTask(text);
  };

  const handleFinishTask = async (taskId: string) => {
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

  const handleRemoveTask = async (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    removeTask(taskId);
  };

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>My Todo List</Title>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map(task => (
        <TaskList
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
