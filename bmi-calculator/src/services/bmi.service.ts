import { BMIRequest } from '@/interfaces/users.interface';

interface BMIRisksAndCondition {
  condition: string;
  health_risk: string;
}

class BMIService {
  public calculateBMI = (request: Array<BMIRequest>): Array<BMIRequest> => {
    const res = request.map((req: BMIRequest): BMIRequest => {
      const bmi = this.round(req.WeightKg / Math.pow(req.HeightCm / 100, 2));
      const { condition, health_risk } = this.getBMIConditions(bmi);
      return { ...req, bmi, condition, health_risk };
    });
    return res;
  };

  //get the bmi conditon and associated risks
  private getBMIConditions = (bmi: number): BMIRisksAndCondition => {
    if (bmi <= 18.4) {
      return {
        condition: 'Under Weight',
        health_risk: 'Malnutrition risk',
      };
    } else if (bmi < 25) {
      return {
        condition: 'Normal Weight',
        health_risk: 'Low risk',
      };
    } else if (bmi < 30) {
      return {
        condition: 'Over Weight',
        health_risk: 'Enhanced risk',
      };
    } else if (bmi < 35) {
      return {
        condition: 'Moderately Obese',
        health_risk: 'Medium risk',
      };
    } else if (bmi < 40) {
      return {
        condition: 'Severly Obese',
        health_risk: 'High risk',
      };
    } else {
      return {
        condition: 'Very severely obese',
        health_risk: 'Very high risk',
      };
    }
  };

  // round to two decimal points
  private round = (num: number): number => {
    return Math.round(num * 100) / 100;
  };
}
export default BMIService;
