import { AppBar, Box, IconButton, InputBase, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignIn = () => {
    handleMenuClose();
    navigate('/auth');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#000', fontWeight: 'bold' }}>
          LibraTrack
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '20px', padding: '0 10px', marginRight: '30px' }}>
          <InputBase placeholder="Search Books" sx={{ color: '#000', padding: '5px' }} />
          <IconButton>
            <SearchIcon sx={{ color: '#000' }} />
          </IconButton>
        </Box>
        {['HOME', 'LIBRARY', 'HELP & SUPPORT'].map((item) => (
          <Typography
            key={item}
            sx={{ margin: '0 20px', color: '#000', cursor: 'pointer', '&:hover': { color: '#ff4081' } }}
            onClick={() => navigate(item === 'HOME' ? '/' : item === 'LIBRARY' ? '/library' : '/help')}
          >
            {item}
          </Typography>
        ))}
        <IconButton onClick={handleMenuOpen}>
          <PersonOutlineIcon sx={{ color: '#000' }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          sx={{ ml: -10, mt: 1 }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src="https://via.placeholder.com/30" alt="Profile" style={{ borderRadius: '50%' }} />
              <Typography>Profile</Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            Settings
          </MenuItem>
          <MenuItem onClick={handleSignIn}>
            Sign in
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;