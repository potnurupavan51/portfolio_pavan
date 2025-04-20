import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import profileImage from './IMG-20240823-WA0039(4).jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleContactMe = () => {
    navigate('/contact');
  };

  return (
    <Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          py: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 2,
            }}
          >
            Hi, I'm Pavan Kumar
          </Typography>
          
          <Typography variant="h2" component="h1" gutterBottom>
            Aspiring Data Scientist
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Passionate about transforming data into insights through machine learning and analytics. 
            Actively developing skills in predictive modeling, statistical analysis, and data visualization 
            to solve real-world problems.
          </Typography>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            sx={{ display: 'flex', gap: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleViewProjects}
            >
              View My Projects
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={handleContactMe}
            >
              Contact Me
            </Button>
          </Box>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          sx={{
            width: { xs: 280, md: 320 },
            height: { xs: 350, md: 400 },
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 3,
            border: '4px solid white',
          }}
        >
          <img
            src={profileImage}
            alt="Pavan Kumar"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 