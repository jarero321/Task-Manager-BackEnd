import { RowDataPacket } from 'mysql2';
import pool from '../db/mysql';

class TaskRepository {
  constructor() {}

  public async getAllTask(): Promise<RowDataPacket[]> {
    try {
      const [rows] = await pool.query<RowDataPacket[]>('Select * from tasks');
      return rows;
    } catch (error) {
      console.error(error);
      throw new Error(error as string);
    }
  }
}

export default TaskRepository;
