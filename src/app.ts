import express, { Express } from 'express';
import bodyParser from 'body-parser';

class App {
  public express: Express;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
  }

  private routes(): void {
    this.express.use('/api', () => {});
  }
}

const myApp = new App().express;
myApp.listen(3000, () => console.log('server running'));
