import React, { useState } from 'react';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import TargetSection from '../Components/TargetSection';
import DashboardStatsCard  from '../Components/DashboardStatsCard';
import Header from '../Components/Header';
import Sidebar  from '../Components/Sidebar';

const MinimalDashboard = () => {

  return (
    <>         
    <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginTop: '20px',
             flexWrap: 'wrap'
           }}>
           <BarChart />
          <DonutChart percent={75} spendingTarget={32}/> 
      </div>
          <TargetSection/>
     </>
  );
};

export default MinimalDashboard;
