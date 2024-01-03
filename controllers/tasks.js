// importar modelo
import { TaskModel } from '../models/task.js'

export const getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = (req, res) => {
  const task = TaskModel.addTask(req.body.description)
  res.json(task)
}

export const deleteTask = (req, res) => {
  TaskModel.deleteTask(req.params.id)
  res.json({ message: 'Deleted successfully' })
}
