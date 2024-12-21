// Dashboard.js
import React from 'react';
import AdSidebar from './AdSidebar';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  margin-left: 250px;
  padding: 20px;
  width: 100%;
`;

const AdDashboard = () => {
  return (
    <DashboardWrapper>
      <AdSidebar />
      <ContentWrapper>
        <h1>Admin Dashboard</h1>
        <p>Welcome to your admin dashboard.</p>
        {/* Add your dashboard content here */}
      </ContentWrapper>
    </DashboardWrapper>
  );
};

export default AdDashboard;