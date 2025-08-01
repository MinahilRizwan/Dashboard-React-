import React from 'react';
import Sidebar from '../src/Components//Sidebar';
import Header from './Components/Header';
import DashboardStatsCard from './Components/DashboardStatsCard';
import MinimalDashboard from './Page/MinimalDashboard';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '240px', width: '100%', padding: '20px', backgroundColor: '#f4f6f8' }}>
        <Header />

      <div style={{
        display: 'flex',
         gap: '16px',
         flexWrap: 'wrap',
        marginTop: '20px'
       }}>
        <DashboardStatsCard  title="New Accounts" value="234%" percent={58} color="#007bff" />
        <DashboardStatsCard  title="Total Expenses" value="71%" percent={62} color="#dc3545" />
        <DashboardStatsCard  title="Company Value" value="$1.45M" percent={72} color="#ffc107" />
        <DashboardStatsCard  title="New Employees" value="+34 hires" percent={81} color="#28a745" />
</div>

    
    <MinimalDashboard/>

    
      </div>
    </div>
  );
};

export default App;
