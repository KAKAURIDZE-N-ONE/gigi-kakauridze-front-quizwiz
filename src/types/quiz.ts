export type Quizz = {
  created_at: string | null;
  description: string;
  level: Level;
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

export type Level = {
  background_color: string;
  active_background_color: string;
  icon_color: string;
  id: number;
  level: string;
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
  question: string;
  quiz_id: number;
  answers?: Answer[];
};

export type Answer = {
  id: number;
  answer: string;
  is_correct: boolean;
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

export type SelectedAnswersCombination = {
  question_id: number;
  answer_ids: number[];
};
