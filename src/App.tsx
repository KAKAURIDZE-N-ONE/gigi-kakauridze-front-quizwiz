import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  EmailVerificationPage,
  LandingPage,
  LoginPage,
  QuizListingPage,
  SignUpPage,
} from "./pages";
import { QuizPage } from "./pages/QuizPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/api/email/verify/:id/:hash"
          element={<EmailVerificationPage />}
        />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizzes" element={<QuizListingPage />} />
          <Route path="/quizzes/:id" element={<QuizPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
