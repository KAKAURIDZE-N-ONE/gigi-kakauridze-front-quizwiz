import { Quiz } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  quizzes: Quiz[];
  page: number;
}

const initialState: ModalState = {
  quizzes: [],
  page: 1,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuizzes(state, action: PayloadAction<Quiz[]>) {
      state.quizzes = [...state.quizzes, ...action.payload];
    },
    resetQuizzes(state) {
      state.quizzes = [];
    },
    updatePage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { addQuizzes, resetQuizzes, updatePage } = quizSlice.actions;

export const getQuizzesState = (store: { quiz: ModalState }) =>
  store.quiz.quizzes;

export const getPage = (store: { quiz: ModalState }) => store.quiz.page;

export default quizSlice.reducer;
