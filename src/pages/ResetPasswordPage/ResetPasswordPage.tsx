import React from "react";
import { LandingPage } from "../LandingPage";
import Layout from "@/components/Layout";
import { DesktopAutorizationPage } from "../DesktopAutorizationPage";
import useResetPasswordPage from "./useResetPasswordPage";

const ResetPasswordPage: React.FC = () => {
  const { windowWidth } = useResetPasswordPage();

  if (windowWidth < 1280)
    return (
      <Layout>
        <LandingPage />
      </Layout>
    );
  else return <DesktopAutorizationPage />;
};

export default ResetPasswordPage;
