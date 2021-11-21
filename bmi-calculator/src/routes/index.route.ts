import { Router } from 'express';
import IndexController from '@controllers/index.controller';

export interface Routes {
  path?: string;
  router: Router;
}

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);

    this.router.post(`${this.path}bmi`, this.indexController.calculateBMI);
  }
}

export default IndexRoute;
