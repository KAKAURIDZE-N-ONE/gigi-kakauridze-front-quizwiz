export type Quiz = {
  created_at: string | null;
  description: string;
  difficulty: string;
  duration: string | null;
  id: number;
  image: string;
  questions: Question[];
  categories: Category[];
  title: string;
  updated_at: string | null;
  total_filled: number;
  users?: PivotUser[] | undefined;
};

export type PivotUser = {
  completed_at: string;
  id: number;
  pivot: {
    quiz_id: 4;
    user_id: 1;
  };
  total_time: number;
  user_result: number;
};

export type Question = {
  id: number;
  point: number;
  quiz_id: number;
};

export type Category = {
  id: number;
  name: string;
  pivot?: {
    quiz_id: number;
    category_id: number;
  };
  created_at?: string | null;
  updated_at?: string | null;
};

type DifficultyProperties = {
  iconColor: string;
  bgColor: string;
};

export type Difficulties = {
  easy: DifficultyProperties;
  medium: DifficultyProperties;
  hard: DifficultyProperties;
};
