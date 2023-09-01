import express, { Express } from 'express';
import bodyParser from 'body-parser';
import TaskRoutes from './routes/TaskRoutes';

class App {
  private express: Express;
  private port: number;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.port = 3000;
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
  }

  private routes(): void {
    this.express.use('/api', TaskRoutes);
  }

  public start(): void {
    this.express.listen(this.port);
  }
}

const myApp = new App();
myApp.start();
