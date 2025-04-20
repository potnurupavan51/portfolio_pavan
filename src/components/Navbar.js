import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            height: '80px', // Increased height
            display: 'flex',
            justifyContent: 'space-between',
            px: { xs: 2, sm: 4, md: 6 }, // Increased horizontal padding
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.8rem' }, // Increased font size
              fontWeight: 'bold',
              cursor: 'pointer',
              '&:hover': {
                color: 'rgba(255, 255, 255, 0.8)',
              },
            }}
            onClick={() => navigate('/')}
          >
            Pavan Kumar | Aspiring Data Scientist
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, sm: 2, md: 3 }, // Increased gap between buttons
            }}
          >
            <Button
              color="inherit"
              onClick={() => navigate('/')}
              sx={{
                fontSize: '1.1rem', // Increased font size
                fontWeight: isActive('/') ? 'bold' : 'normal',
                textTransform: 'none',
                minWidth: '100px', // Increased button width
                height: '45px', // Increased button height
                borderBottom: isActive('/') ? '3px solid white' : 'none',
                borderRadius: '4px 4px 0 0',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/about')}
              sx={{
                fontSize: '1.1rem',
                fontWeight: isActive('/about') ? 'bold' : 'normal',
                textTransform: 'none',
                minWidth: '100px',
                height: '45px',
                borderBottom: isActive('/about') ? '3px solid white' : 'none',
                borderRadius: '4px 4px 0 0',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/projects')}
              sx={{
                fontSize: '1.1rem',
                fontWeight: isActive('/projects') ? 'bold' : 'normal',
                textTransform: 'none',
                minWidth: '100px',
                height: '45px',
                borderBottom: isActive('/projects') ? '3px solid white' : 'none',
                borderRadius: '4px 4px 0 0',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/contact')}
              sx={{
                fontSize: '1.1rem',
                fontWeight: isActive('/contact') ? 'bold' : 'normal',
                textTransform: 'none',
                minWidth: '100px',
                height: '45px',
                borderBottom: isActive('/contact') ? '3px solid white' : 'none',
                borderRadius: '4px 4px 0 0',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 