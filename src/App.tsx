import { Route, Routes } from "react-router-dom";
import { LandingPage } from "@/pages/LandingPage";
import Layout from "@/components/Layout";
import { LoginPage } from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage/SignupPage";
import { EmailVerificationPage } from "./pages/EmailVerificationPage";
import { QuizListingPage } from "./pages/QuizListingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/api/email/verify/:id/:hash"
          element={<EmailVerificationPage />}
        />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quizzes" element={<QuizListingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
