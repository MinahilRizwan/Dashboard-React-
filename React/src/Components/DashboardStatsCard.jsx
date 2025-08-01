import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const DashboardStatsCard = ({ title, value, percent, color = '#1976d2' }) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      borderBottom: `4px solid ${color}`,
      minWidth: '220px',
      maxWidth: '250px',
      flex: '1 1 200px'
    }}>
      <div>
        <div style={{ fontSize: '12px', color: '#888' }}>{title}</div>
        <div style={{ fontSize: '20px', fontWeight: '600', color: '#333' }}>{value}</div>
      </div>

      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={percent}
          size={40}
          thickness={4}
          style={{ color }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>{percent}</span>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardStatsCard;
