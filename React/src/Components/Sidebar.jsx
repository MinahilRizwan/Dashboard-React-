import React, { useState } from 'react';
import {
  Dashboard, BarChart, AttachMoney, TableChart, Apps, Widgets,
  InsertChart, PieChart, LineStyle, Assignment, GridView,
  Layers, AccountBox, Description, Equalizer, Assessment, Menu
} from '@mui/icons-material';
import {
  Drawer, IconButton, useMediaQuery, Divider, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const sectionTitleStyle = {
  fontSize: '12px',
  color: '#1E88E5',
  fontWeight: 'bold',
  margin: '10px 16px 5px',
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = () => setOpen(!open);

  const menuItem = (icon, label, indent = false) => (
    <ListItem
      button
      onClick={() => {
        if (isMobile) setOpen(false);
        window.location.href = '/minimal';
      }}
      sx={{
        pl: indent ? 4 : 2,
        '&:hover': { backgroundColor: '#f5f5f5' },
      }}
    >
      {icon && <ListItemIcon sx={{ minWidth: '32px' }}>{icon}</ListItemIcon>}
      <ListItemText primary={label} />
    </ListItem>
  );

  const renderSidebarContent = () => (
    <div style={{ width: 220, overflowX: 'hidden' }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', padding: '16px', color: '#1E88E5' }}>
        MENU
      </div>
      <Divider />
      <div style={{ padding: '10px 0' }}>
        <div style={sectionTitleStyle}>DASHBOARDS</div>
        <List dense>
          {menuItem(<BarChart fontSize="small" />, 'Analytics')}
          {menuItem(<AttachMoney fontSize="small" />, 'Commerce')}
          {menuItem(<InsertChart fontSize="small" />, 'Sales')}
          {menuItem(<Dashboard fontSize="small" />, 'Minimal')}
          {menuItem(null, 'Variation 1', true)}
          {menuItem(null, 'Variation 2', true)}
        </List>
        <List dense>
          {menuItem(<Assignment fontSize="small" />, 'CRM')}
          {menuItem(<Description fontSize="small" />, 'Pages')}
          {menuItem(<Apps fontSize="small" />, 'Applications')}
        </List>
        <div style={sectionTitleStyle}>UI COMPONENTS</div>
        <List dense>
          {menuItem(<Widgets fontSize="small" />, 'Elements')}
          {menuItem(<Layers fontSize="small" />, 'Components')}
          {menuItem(<TableChart fontSize="small" />, 'Tables')}
        </List>
        <div style={sectionTitleStyle}>DASHBOARD WIDGETS</div>
        <List dense>
          {menuItem(<PieChart fontSize="small" />, 'Chart Boxes 1')}
          {menuItem(<PieChart fontSize="small" />, 'Chart Boxes 2')}
          {menuItem(<PieChart fontSize="small" />, 'Chart Boxes 3')}
          {menuItem(<AccountBox fontSize="small" />, 'Profile Boxes')}
        </List>
        <div style={sectionTitleStyle}>FORMS</div>
        <List dense>
          {menuItem(<GridView fontSize="small" />, 'Elements')}
          {menuItem(<Widgets fontSize="small" />, 'Widgets')}
        </List>
        <div style={sectionTitleStyle}>CHARTS</div>
        <List dense>
          {menuItem(<Equalizer fontSize="small" />, 'ChartJS')}
          {menuItem(<Assessment fontSize="small" />, 'Apex Charts')}
          {menuItem(<LineStyle fontSize="small" />, 'Chart Sparklines')}
        </List>
      </div>
    </div>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: 'fixed', top: 10, left: 10, zIndex: 1300 }}
        >
          <Menu />
        </IconButton>
      )}
      {!isMobile && (
        <div
          style={{
            width: '220px',
            height: '100vh',
            backgroundColor: '#fff',
            borderRight: '1px solid #e0e0e0',
            padding: '20px 0',
            position: 'fixed',
            top: 0,
            left: 0,
            boxSizing: 'border-box',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          {renderSidebarContent()}
        </div>
      )}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        {renderSidebarContent()}
      </Drawer>
    </>
  );
};

export default Sidebar;
