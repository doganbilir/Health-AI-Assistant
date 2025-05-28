export interface Condition {
  name: string;
  probability: number;
  description: string;
}

export interface DiagnosisResponse {
  possibleConditions: Condition[];
  recommendedActions: string[];
  disclaimer: string;
}

export interface SymptomAnalysisResult extends DiagnosisResponse {
  symptoms: string;
} 