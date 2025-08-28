import React from "react";
import { SidebarContainer, SidebarItem } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarItem>🏠 Início</SidebarItem>
      <SidebarItem>🔥 Em alta</SidebarItem>
      <SidebarItem>📺 Inscrições</SidebarItem>
      <SidebarItem>📚 Biblioteca</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
