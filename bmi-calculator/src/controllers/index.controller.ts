import { NextFunction, Request, Response } from 'express';
import BMIService from '../services/bmi.service';

class IndexController {
  private bmiService: BMIService;

  constructor() {
    this.bmiService = new BMIService();
  }
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public calculateBMI = (req: Request, res: Response, next: NextFunction): void => {
    try {
      console.log(req.body);

      const bmiRequests = req.body;

      res.json(this.bmiService.calculateBMI(bmiRequests));
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
