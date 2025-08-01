import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Legend, Tooltip);

const BarChart = () => {
  const data = {
    labels: ['Jan 01', 'Jan 02', 'Jan 03', 'Jan 04', 'Jan 05', 'Jan 06', 'Jan 07', 'Jan 08', 'Jan 09', 'Jan 10', 'Jan 11', 'Jan 12'],
    datasets: [
      {
        type: 'bar',
        label: 'Website Blog',
        backgroundColor: '#2196f3',
        data: [450, 500, 400, 650, 200, 450, 200, 400, 700, 350, 250, 200],
        yAxisID: 'y',
        barThickness: 28,
        order: 2 
      },
      {
        type: 'line',
        label: 'Social Media',
        borderColor: '#00c853',
        backgroundColor: '#00c853',
        data: [20, 40, 35, 25, 45, 20, 15, 30, 25, 22, 15, 18],
        yAxisID: 'y1',
        tension: 0,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: '#00c853',
        pointBorderWidth: 2,
        order: 1 
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        position: 'left',
        title: {
          display: true,
          text: 'Website Blog',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        grid: {
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: 'Social Media',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  };

  return (
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      width: '100%',
      maxWidth: '650px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h4 style={{ margin: 0 }}>Traffic Sources</h4>
        <button style={{
          backgroundColor: '#ffc107', 
          color: '#000',
          border: 'none',
          padding: '6px 14px',
          borderRadius: '4px',
          fontWeight: 'bold',
          outline:'none',
          cursor: 'pointer',
          marginRight: '5px'
        }}>
          Actions
        </button>
      </div>
      <div style={{ height: '300px' }}>
        <Chart type='bar' data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
