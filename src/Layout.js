// Layout.js
import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import LoginNavBar from "./LoginNavBar";
import { useAuth } from './AuthContext';

const Layout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {isAuthenticated ? <LoginNavBar /> : <Navigation />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;