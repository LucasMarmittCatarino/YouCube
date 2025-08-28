import React from "react";
import Sidebar from "../components/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "16px" }}>{children}</main>
    </div>
  );
};

export default MainLayout;
