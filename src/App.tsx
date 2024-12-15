import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import Layout from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
