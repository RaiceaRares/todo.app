import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Todo = {
  id: number;
  task: string;
  finished: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Todo[]>) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const todos: Todo[] = response.data
      .slice(0, 10)
      .map((todo: any) => ({
        id: todo.id,
        task: todo.title,
        finished: todo.completed,
      }));
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
