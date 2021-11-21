export interface BMIRequest {
  Gender: string;
  HeightCm: number;
  WeightKg: number;
  bmi?: number;
  condition?: string;
  health_risk?: string;
}
