import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  EmailVerificationPage,
  LandingPage,
  LoginPage,
  QuizListingPage,
  SignUpPage,
} from "./pages";
import { QuizzPage } from "./pages/QuizzPage";

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
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizzes" element={<QuizListingPage />} />
          <Route path="/quizzes/:id" element={<QuizzPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
