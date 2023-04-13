import axios from 'axios'

export default async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const todos = response.data.slice(0, 10).map(todo => ({
      id: todo.id,
      task: todo.title,
      finished: todo.completed
    }))
    res.status(200).json(todos)
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
