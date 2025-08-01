import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Header = ({ title = "Minimal Dashboard", breadcrumb = "Minimal Dashboard" }) => {
  const [avatarUrl, setAvatarUrl] = useState('https://randomuser.me/api/portraits/women/44.jpg');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatarUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      backgroundColor: '#fff',
      padding: '15px 20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      gap: isMobile ? '15px' : '0'
    }}>
     
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <DashboardIcon style={{ fontSize: '20px', color: '#333' }} />
          <h3 style={{ margin: 0, fontSize: '18px', color: '#333' }}>{title}</h3>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '4px',
          fontSize: '12px',
          color: '#888',
          gap: '6px',
          flexWrap: 'wrap'
        }}>
          <HomeIcon style={{ fontSize: '14px', color: '#888' }} />
          <button style={breadcrumbButtonStyle}>Dashboard</button>
          <span>&gt;</span>
          <button style={breadcrumbButtonStyle}>{breadcrumb}</button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <select style={periodSelectorStyle}>
          <option>Select period</option>
          <option>Last week</option>
          <option>Last month</option>
        </select>

        <div style={{ position: 'relative' }}>
          <Avatar
            alt="User"
            src={avatarUrl}
            sx={{ width: 36, height: 36, cursor: 'pointer' }}
            onClick={() => document.getElementById('avatar-upload').click()}
          />
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

const breadcrumbButtonStyle = {
  border: 'none',
  background: 'none',
  color: '#888',
  cursor: 'pointer',
  padding: 0,
  outline: 'none',
  fontSize: '12px'
};

const periodSelectorStyle = {
  padding: '5px 10px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '12px'
};

export default Header;
