import React, { useEffect } from "react";
import useLoginPage from "../LoginPage/useLoginPage";
import { DesktopAutorizationPage } from "../DesktopAutorizationPage";
import { LandingPage } from "../LandingPage";
import Layout from "@/components/Layout";
import {
  updateMobileForgotPasswordIsOpen,
  updateMobileSignInIsOpen,
  updateModalIsOpen,
} from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

const ForgotPasswordPage: React.FC = () => {
  const { windowWidth } = useLoginPage();
  const dispatch = useDispatch();

  useEffect(() => {
    if (windowWidth < 1280) {
      dispatch(updateModalIsOpen(true));
      dispatch(updateMobileSignInIsOpen(false));
      dispatch(updateMobileForgotPasswordIsOpen(true));
    } else {
      dispatch(updateModalIsOpen(false));
    }
  }, [windowWidth]);

  if (windowWidth < 1280)
    return (
      <Layout>
        <LandingPage />
      </Layout>
    );
  else return <DesktopAutorizationPage />;
};

export default ForgotPasswordPage;
