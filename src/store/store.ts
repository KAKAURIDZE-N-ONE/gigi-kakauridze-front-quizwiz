import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/store/slices/modalSlice";
import quizReducer from "@/store/slices/quizSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
