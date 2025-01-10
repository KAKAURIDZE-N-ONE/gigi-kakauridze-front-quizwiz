import { Quiz, SelectedAnswersCombination } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface QuizState {
  quizzes: Quiz[];
  page: number;
  quizIsStarted: boolean;
  selectedAnswers: SelectedAnswersCombination[];
  timer: number | null;
  quizFinished: Boolean;
}

const initialState: QuizState = {
  quizzes: [],
  page: 1,
  quizIsStarted: false,
  selectedAnswers: [],
  timer: null,
  quizFinished: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    updateTimer(state, action) {
      state.timer = action.payload;
    },
    updateQuizFinished(state, action) {
      state.quizFinished = action.payload;
    },
    addQuizzes(state, action: PayloadAction<Quiz[]>) {
      state.quizzes = [...state.quizzes, ...action.payload];
    },
    resetQuizzes(state) {
      state.quizzes = [];
    },
    updatePage(state, action) {
      state.page = action.payload;
    },
    updateQuizIsStarted(state, action) {
      state.quizIsStarted = action.payload;
    },
    addSelectedAnswer(
      state,
      action: PayloadAction<{
        question_id: number;
        answer_id: number;
        replace: boolean;
      }>
    ) {
      const selectedAnswers = JSON.parse(JSON.stringify(state.selectedAnswers));

      const existingQuestionIndex = selectedAnswers.findIndex(
        (el: SelectedAnswersCombination) =>
          el.question_id === action.payload.question_id
      );

      if (existingQuestionIndex !== -1) {
        const selectedQuestion = selectedAnswers[existingQuestionIndex];
        const includesNewAnswer = selectedQuestion.answer_ids.includes(
          action.payload.answer_id
        );
        if (includesNewAnswer) {
          state.selectedAnswers[existingQuestionIndex].answer_ids =
            selectedQuestion.answer_ids.filter(
              (el: number) => el !== action.payload.answer_id
            );
        } else {
          if (action.payload.replace) {
            state.selectedAnswers[existingQuestionIndex].answer_ids = [
              action.payload.answer_id,
            ];
          } else {
            state.selectedAnswers[existingQuestionIndex].answer_ids.push(
              action.payload.answer_id
            );
          }
        }
      } else {
        state.selectedAnswers.push({
          question_id: action.payload.question_id,
          answer_ids: [action.payload.answer_id],
        });
      }
    },
  },
});

export const {
  addQuizzes,
  resetQuizzes,
  updatePage,
  updateQuizIsStarted,
  addSelectedAnswer,
  updateTimer,
  updateQuizFinished,
} = quizSlice.actions;

export const getTimer = (store: { quiz: QuizState }) => store.quiz.timer;

export const getQuizFinished = (store: { quiz: QuizState }) =>
  store.quiz.quizFinished;

export const getQuizzesState = (store: { quiz: QuizState }) =>
  store.quiz.quizzes;

export const getPage = (store: { quiz: QuizState }) => store.quiz.page;

export const getQuizIsStarted = (store: { quiz: QuizState }) =>
  store.quiz.quizIsStarted;

export const getSelectedAnswers = (store: RootState, question_id: number) =>
  store.quiz.selectedAnswers.find(
    (answer) => answer.question_id === question_id
  );

export default quizSlice.reducer;
