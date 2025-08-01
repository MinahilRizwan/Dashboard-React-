import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from 'chart.js';
import { Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip);

const DonutChart = ({ percent = 75, spendingTarget = 32 }) => {
  const data = {
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: [
          'linear-gradient(to right, #00c853, #2196f3)', // fallback
          '#eaeaea'
        ],
        borderWidth: 0,
        cutout: '80%'
      }
    ]
  };

  const gradientPlugin = {
    id: 'gradientColor',
    beforeDatasetsDraw(chart) {
      const {
        ctx,
        chartArea: { left, right }
      } = chart;

      const gradient = ctx.createLinearGradient(left, 0, right, 0);
      gradient.addColorStop(0, '#00c853');
      gradient.addColorStop(1, '#2196f3');

      chart.data.datasets[0].backgroundColor[0] = gradient;
    }
  };

  const options = {
    cutout: '80%',
    animation: { duration: 300 },
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false }
    }
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      width: '90%',
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
    
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5px'
      }}>
        <span style={{ fontWeight: "bold"}}>Income</span>
        <span style={{ cursor: 'pointer' }}><button style={{outline:'none'}}>⚙️</button></span>
      </div>

            <div style={{
        position: 'relative',
        height: '200px',
        width: '200px',
        margin: '0 auto',
        marginBottom: '10px'
      }}>
        <Doughnut data={data} options={options} plugins={[gradientPlugin]} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize: '25px',
          fontWeight: 'bold'
        }}><Typography>Percent</Typography>
          {percent}%
        </div>
      </div>

        <div style={{ marginTop: '0'}}>
        <div style={{ fontSize: '25px', fontWeight: 'bold', color: '#f9a825' }}>
          {spendingTarget}%
        </div>
        <div style={{
          width: '100%',
          height: '6px',
          background: '#e0e0e0',
          borderRadius: '4px',
          marginTop: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${spendingTarget}%`,
            height: '100%',
            backgroundColor: '#f9a825'
          }} />
        </div>
        </div>
        <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
          Spendings Target
        </div>
      </div>
  );
};

export default DonutChart;
