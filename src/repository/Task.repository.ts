import { RowDataPacket } from 'mysql2';
import pool from '../db/mysql';
import { getAllTasksQuery } from '../db/queries/Task.queries';

class TaskRepository {
  constructor() {}

  public async getAllTask(): Promise<RowDataPacket[]> {
    try {
      const [rows] = await pool.query<RowDataPacket[]>(getAllTasksQuery);
      return rows;
    } catch (error) {
      console.error(error);
      throw new Error(error as string);
    }
  }
}

export default TaskRepository;
