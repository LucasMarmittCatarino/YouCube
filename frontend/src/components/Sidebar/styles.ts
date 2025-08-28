import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 240px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e5e5e5;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SidebarItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
