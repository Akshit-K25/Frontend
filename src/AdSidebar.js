// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  padding-top: 20px;
  position: fixed;
`;

const MenuItem = styled.div`
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #34495e;
  }
`;

const SubMenu = styled.div`
  padding-left: 20px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const AdSidebar = () => {
  const [showSubMenu, setShowSubMenu] = React.useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu((prev) => !prev);
  };

  return (
    <SidebarWrapper>
      <MenuItem>
        <Link to="/admin/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
          Dashboard
        </Link>
      </MenuItem>
      <MenuItem onClick={toggleSubMenu}>
        <span>Users</span>
      </MenuItem>
      <SubMenu show={showSubMenu}>
        <MenuItem>
          <Link to="/admin/users/list" style={{ color: 'white', textDecoration: 'none' }}>
            User List
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/admin/users/add" style={{ color: 'white', textDecoration: 'none' }}>
            Add User
          </Link>
        </MenuItem>
      </SubMenu>
      <MenuItem>
        <Link to="/admin/settings" style={{ color: 'white', textDecoration: 'none' }}>
          Settings
        </Link>
      </MenuItem>
    </SidebarWrapper>
  );
};

export default AdSidebar;