import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Diamond Price Prediction Project',
    description: 'A machine learning project that predicts diamond prices based on various features. Built using Jupyter Notebook and Python.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/potnurupavan51/Diamond_Price_Prediction_Project',
    demo: '#'
  },
  {
    title: 'Forest Fire Algerian ML Project',
    description: 'A machine learning project for predicting forest fires in Algeria based on environmental conditions.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    technologies: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/potnurupavan51/Forest_fire_Algerian_ML-project',
    demo: '#'
  },
  {
    title: 'Flipkart Review Scraping',
    description: 'A web scraping project that extracts product reviews from Flipkart for analysis.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80',
    technologies: ['Python', 'Web Scraping', 'Data Collection', 'Pandas'],
    github: 'https://github.com/potnurupavan51/Flipkart-Review-Scrapping',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ py: 10 }}
      >
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          sx={{ 
            mb: 8,
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          My Projects
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={project.title} sx={{ display: 'flex' }}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '550px',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 3,
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: '300px' }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Box>
                
                <CardContent 
                  sx={{ 
                    flexGrow: 1,
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h2"
                    sx={{ 
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      mb: 2,
                      height: '60px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ 
                      mb: 2,
                      fontSize: '1.1rem',
                      height: '80px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      mb: 'auto',
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{ 
                          backgroundColor: 'primary.main', 
                          color: 'white',
                          fontSize: '0.9rem',
                          height: '28px',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions 
                  sx={{ 
                    p: 3,
                    pt: 0,
                    gap: 2,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Button 
                    size="large" 
                    color="primary" 
                    href={project.github} 
                    target="_blank"
                    variant="contained"
                    fullWidth
                  >
                    View on GitHub
                  </Button>
                  {project.demo !== '#' && (
                    <Button 
                      size="large" 
                      color="primary" 
                      href={project.demo} 
                      target="_blank"
                      variant="outlined"
                      fullWidth
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects; 