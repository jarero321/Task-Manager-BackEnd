import Task from '../models/Tasks';
import TaskRepository from '../repository/Task.repository';

class TaskService {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public async getAllTask(): Promise<Task[]> {
    const rows = await this.taskRepository.getAllTask();
    const task: Task[] = rows?.map((row) => {
      return {
        id: row.id,
        title: row.title,
        description: row.description,
        completed: Boolean(row.completed),
      };
    });
    return task;
  }
}

export default TaskService;
