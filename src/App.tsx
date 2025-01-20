import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import { ToastContainer } from "react-toastify";
import {
  EmailVerificationPage,
  LandingPage,
  LoginPage,
  QuizListingPage,
  SignUpPage,
} from "./pages";
import { QuizPage } from "./pages/QuizPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Routes>
        <Route
          path="/email/verify/:id/:hash"
          element={<EmailVerificationPage />}
        />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizzes" element={<QuizListingPage />} />
          <Route path="/quizzes/:id" element={<QuizPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
