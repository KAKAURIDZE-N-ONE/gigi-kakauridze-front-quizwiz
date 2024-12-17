import React, { useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { LandingPage } from "../LandingPage";
import { useDispatch } from "react-redux";
import {
  updateMobileSignInIsOpen,
  updateMobileSignUpIsOpen,
  updateModalIsOpen,
} from "../../state/slices/modalSlice";
import DesktopAutorizationPage from "../DesktopAutorizationPage/DesktopAutorizationPage";
import Layout from "../../components/Layout";

const LoginPage: React.FC = () => {
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (windowWidth < 1280) {
      dispatch(updateModalIsOpen(true));
      dispatch(updateMobileSignInIsOpen(true));
      dispatch(updateMobileSignUpIsOpen(false));
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

export default LoginPage;
