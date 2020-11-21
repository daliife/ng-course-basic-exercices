export interface Recipe {
  id: number;
  name: string;
  description?: string;
  difficulty: string;
  estimatedTime: number;
  ingredients: string[];
}
