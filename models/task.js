/**
 * Array to store tasks.
 * @type {Array<Object>}
 */
const tasks = []

/**
 * ID for the next task. Increments each time a new task is added.
 * @type {number}
 */
let currentId = 1

/**
 * Model class representing a task.
 * @class
 */
export class TaskModel {
  /**
   * Fetches all tasks.
   * @name TaskModel.getAllTasks
   * @static
   * @returns {Array<Object>} Array of tasks.
   */
  static getAllTasks () {
    return tasks
  }

  /**
   * Adds a new task to the list.
   * @name TaskModel.addTask
   * @static
   * @param {string} description - The description of the task.
   * @returns {Object} The new task object.
   */
  static addTask (description) {
    const task = {
      id: currentId,
      description
    }
    currentId += 1
    tasks.push(task)
    return task
  }

  /**
   * Deletes a task from the list by its ID.
   * @name TaskModel.deleteTask
   * @static
   * @param {number} id - The ID of the task to delete.
   */
  static deleteTask (id) {
    const taskIndex = tasks.findIndex(task => task.id === id)
    tasks.splice(taskIndex, 1)
  }
}
