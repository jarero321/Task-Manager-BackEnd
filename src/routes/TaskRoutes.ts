import { Router } from 'express';
import TaskController from '../controllers/Task.controllers';
import TaskService from '../services/Task.services';
import TaskRepository from '../repository/Task.repository';

class TaskRoutes {
  public router: Router;
  private taskController: TaskController;

  constructor() {
    this.taskController = new TaskController(
      new TaskService(new TaskRepository())
    );
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/v1/tasks', (req, res) => {
      this.taskController.getAllTasks(req, res);
    });
  }
}

export default new TaskRoutes().router;
