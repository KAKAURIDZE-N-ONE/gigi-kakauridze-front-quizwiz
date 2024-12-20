import React, { useEffect } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useDispatch } from "react-redux";
import {
  updateMobileSignInIsOpen,
  updateMobileSignUpIsOpen,
  updateModalIsOpen,
} from "@/store/slices/modalSlice";
import { LandingPage } from "@/pages/LandingPage/index";
import DesktopAutorizationPage from "@/pages/DesktopAutorizationPage/DesktopAutorizationPage";
import Layout from "@/components/Layout";

const SignupPage: React.FC = () => {
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (windowWidth < 1280) {
      dispatch(updateModalIsOpen(true));
      dispatch(updateMobileSignUpIsOpen(true));
      dispatch(updateMobileSignInIsOpen(false));
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

export default SignupPage;
