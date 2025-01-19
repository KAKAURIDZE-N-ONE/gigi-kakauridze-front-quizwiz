import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
