import { Request, Response } from 'express';
import TaskService from '../services/Task.services';

class TaskController {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  public async getAllTasks(_req: Request, res: Response): Promise<void> {
    try {
      const tasks = await this.taskService.getAllTask();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({
        error: 'Error al obtener las tareas',
      });
    }
  }
}

export default TaskController;
