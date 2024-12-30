import React from "react";
import { LandingPage } from "@/pages/LandingPage/index";
import DesktopAutorizationPage from "@/pages/DesktopAutorizationPage/DesktopAutorizationPage";
import Layout from "@/components/Layout";
import useLoginPage from "./useLoginPage";

const LoginPage: React.FC = () => {
  const { windowWidth } = useLoginPage();

  if (windowWidth < 1280)
    return (
      <Layout>
        <LandingPage />
      </Layout>
    );
  else return <DesktopAutorizationPage />;
};

export default LoginPage;
